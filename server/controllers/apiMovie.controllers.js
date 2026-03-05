import fs from "fs";
export const loadData = async (req, res) => {
  try {
    const data = JSON.parse(
      await fs.promises.readFile(
        "/Users/arimac/Desktop/react/test/Movie-Night-Picker/server/data/data.json",
        "utf-8"
      )
    );
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
