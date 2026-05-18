import File from "../models/File.js";

export const createFile = async (req, res) => {
  try {

    if (Array.isArray(req.body)) {

      const filesData = req.body.map((file) => ({
        ...file,
        uploadedBy: req.user.id
      }));

      const files = await File.insertMany(filesData);

      return res.status(201).json(files);
    }

    const file = await File.create({
      ...req.body,
      uploadedBy: req.user.id
    });

    res.status(201).json(file);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getFiles = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 5;

    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    let filter = {};

    if (req.user.role !== "admin") {
      filter.uploadedBy = req.user.id;
    }

    if (search) {
      filter.fileName = {
        $regex: search,
        $options: "i"
      };
    }

    const files = await File.find(filter)
      .populate("uploadedBy", "name email")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await File.countDocuments(filter);

    res.status(200).json({
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      files
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found"
      });
    }

    if (
      file.uploadedBy.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    res.status(200).json(file);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const updateFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found"
      });
    }

    if (file.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Only owner can update"
      });
    }

    const updatedFile = await File.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.status(200).json(updatedFile);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found"
      });
    }

    if (file.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Only owner can delete"
      });
    }

    await file.deleteOne();

    res.status(200).json({
      message: "File deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};