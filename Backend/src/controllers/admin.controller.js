import User from "../model/user.model.js";
import Task from "../model/task.model.js";



/**
 * @name getAllUsersController
 * @desc Get all registered users excluding admin accounts
 * @access Admin
 */
export const getAllUsersController = async (req, res) => {
  try{

    const users = await User.find({role: "user"}).select("-password");

    return res.status(200).json({
      message: "Users fetched successfully",
      data: {
        users,
      },
    });

  }catch(error){
    console.error("Error fetching users: ", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}


/**
 * @name getUserController
 * @desc Get a specific user by ID
 * @access Admin
 */
export const getUserController = async (req, res) => {
  try{
    
    const { id } = req.params;

    const user = await User.findOne({
      _id: id,
      role: "user",
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      data: {
        user,
      },
    });

  }catch(error){
    console.error("Error fetching user: ", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}


/**
 * @name deleteUserController
 * @desc Delete a user and all tasks created by the user
 * @access Admin
 */
export const deleteUserController  = async (req, res) => {
  try{

    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.role === "admin") {
      return res.status(403).json({
        message: "Admin accounts cannot be deleted",
      });
    }

    await Task.deleteMany({
      createdBy:  user.id,
    });

    await user.deleteOne();

    return res.status(200).json({
      message: "User deleted successfully",
      data: null,
    });

  }catch(error){
    console.error("Error deleting user:", error);

    return res.status(500).json({
      message: "Internal server error",
    }); 
  }
}




/**
 * @name getAllTasksController
 * @desc Get all tasks created by users
 * @access Admin
 */
export const getAllTasksController = async (req, res) => {
  try{

    const tasks = await Task.find()
      .populate("createdBy", "username email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Tasks fetched successfully",
      data: {
        tasks,
      },
    });

  }catch(error){
    console.error("Error fetching tasks: ", error);

    return res.status(500).json({
      message: "Internal server error",
    });

  }
}


/**
 * @name getUserTasksController
 * @desc Get all tasks created by a specific user
 * @access Admin
 */
export const getUserTasksController = async (req, res) => {
  try{

    const { id } = req.params;

    const user = await User.findOne({
      _id: id,
      role: "user",
    }).select("-password")

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const tasks = await Task.find({
      createdBy: user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "User tasks fetched successfully",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        tasks,
      },
    });

  }catch(error){
    console.error("Error fetching user tasks:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}


/**
 * @name getTaskController
 * @desc Get a specific task by ID with creator details
 * @access Admin
 */
export const getTaskController = async (req, res)=>{
  try{

    const {id}=req.params;

    const task = await Task.findById(id)
      .populate("createdBy","username email");


    if(!task){
      return res.status(404).json({
        message:"Task not found"
      });
    }


    return res.status(200).json({
      message:"Task fetched successfully",
      data:{
        task
      }
    });


  }catch(error){

    console.error(error);

    return res.status(500).json({
      message:"Internal server error"
    });

  }
}


/**
 * @name deleteTaskController
 * @desc Delete a specific task by ID
 * @access Admin
 */
export const deleteTaskController = async (req, res) => {
  try{

    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.status(200).json({
      message: "Task deleted successfully",
      data: null,
    });

    
  }catch(error){
    console.error("Error deleting task:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}