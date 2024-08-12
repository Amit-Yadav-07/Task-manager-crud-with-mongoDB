// const data = require('../data');
const modal = require('../modals/task');


// getAll Tasks
const getAllTasks = async (req, res) => {
    try {
        const task = await modal.find({});
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// single Task
const getSingleTask = async (req, res) => {

    try {
        const { id: singleTaskId } = req.params;
        const singleTask = await modal.findOne({ _id: singleTaskId })

        if (!singleTask) {
            return res.status(404).json({ msg: `no task match with id ${singleTaskId}` })
        }

        res.status(200).json({ singleTask })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


// create Task
const createTask = async (req, res) => {
    try {
        const task = await modal.create(req.body);

        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// update Task
const updateTask = async (req, res) => {
    try {
        const { id: updateId } = req.params;

        const updateTask = await modal.findOneAndUpdate({ _id: updateId }, req.body, {
            new: true,
            runValidators: true
        })

        if (!updateTask) {
            return res.status(404).json({ msg: `no task match with id ${updateId}` })
        }

        res.status(200).json({ updateTask })

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

// delete Task
const deleteTask = async (req, res) => {
    try {
        const { id: deleteTaskId } = req.params;
        const deleteTask = await modal.findByIdAndDelete({ _id: deleteTaskId });

        if (!deleteTask) {
            return res.status(404).json({ msg: `no task match with id ${deleteTaskId}` })
        }

        res.status(200).json({ deleteTask })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



module.exports = { getAllTasks, getSingleTask, createTask, updateTask, deleteTask }


// mongoDb password = Amit@9532