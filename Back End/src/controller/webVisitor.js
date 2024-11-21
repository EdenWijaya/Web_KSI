import { setVisitor, getTotalVisitor } from "../models/visitor.js";

export const setNewVisitor = async (req, res) => {
  try {
    await setVisitor("visited");
    res.status(200).json({ message: "Visitor updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update visitor" });
    console.error(error);
  }
};

export const totalVisitor = async (req, res) => {
  try {
    const total = await getTotalVisitor();
    res.status(200).json({ message: "Total visitor", data: total[0] });
  } catch (error) {
    res.status(500).json({ message: "Failed to get total visitor" });
    console.error(error);
  }
};
