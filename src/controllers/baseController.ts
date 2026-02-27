import { Request, Response } from "express";

export class BaseController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(model: any) {
    this.model = model;
  }

  async getAll(req: Request, res: Response) {
    const filter = req.query;

    try {
      if (filter) {
        const filterData = await this.model.find(filter);
        res.json(filterData);
      } else {
        const data = await this.model.find();
        res.json(data);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    console.log(id);

    try {
      const movie = await this.model.findById(id);
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ message: "Movie not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async post(req: Request, res: Response) {
    const newObject = req.body;
    console.log(newObject);

    try {
      const response = await this.model.create(newObject);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async del(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const deletedObject = await this.model.findByIdAndDelete(id);
      if (deletedObject) {
        res.json({ message: "Object deleted successfully" });
      } else {
        res.status(404).json({ message: "Object not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async put(req: Request, res: Response) {
    const id = req.params.id;
    const updatedObject = req.body;
    console.log(id, updatedObject);

    try {
      const object = await this.model.findByIdAndUpdate(id, updatedObject, {
        new: true,
      });
      if (object) {
        res.json(object);
      } else {
        res.status(404).json({ message: "Object not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
