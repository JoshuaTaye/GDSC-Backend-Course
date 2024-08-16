import {Tutor} from "../tutorSchema.js";

export const getTutors =  async (req, res) => {
    const {name, id} = req.query;
    console.log(name, id)
    try {
        let filteredTutors = await Tutor.find();
        if (name) {
            filteredTutors = filteredTutors.filter(tutor => tutor.name.toLowerCase() === name.toLowerCase())
        }
        console.log(filteredTutors)
        if (id) {
            filteredTutors = filteredTutors.filter(tutor => tutor.id === parseInt(id));
        }
        if (filteredTutors.length === 0) return res.status(404).send("Couldn't find tutors");
        res.send(filteredTutors);
    } catch (e) {
        return res.send(500).send(e.message)
    }
}

export const getTutor =   async (req, res) => {
    try {
        const id = req.params.id
        const tutor = await Tutor.findOne({id});
        if (!tutor) return res.status(404).send("Tutor doesn't exist");
        res.status(200).json(tutor);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

export const createTutor = async (req, res) => {
    try {
        const tutor = req.body;
        tutor.id = await Tutor.countDocuments() + 1;
        const result = await Tutor.create(tutor);
        res.status(201).json(result);
    } catch (e) {
        res.status(500).send(e.message)
    }
}

export const updateTutor = async (req, res) => {
    try {
        const id = req.params.id;
        let tutor = await Tutor.findOne({id});
        if (!tutor) return res.status(404).send("Tutor not found!");
        Object.keys(req.body).forEach(key => {
            tutor[key] = req.body[key];
        });
        await tutor.save();
        const updated = await Tutor.find({id});
        res.status(200).json(updated);
    } catch (e) {
        res.status(500).send(e.message);
    }
}


export const deleteTutor = async (req, res) =>{
    try{
        const id = req.params.id
        let tutor = await Tutor.findOneAndDelete({id});
        if (!tutor) return res.status(404).send("Tutor not found!");
        res.status(200).send("Deleted Successfully");
    }catch (e) {
        res.status(500).send(e.message)
    }
}