import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA = "USER"

export const getUserList = async() => {
    try{
        const users = await AsyncStorage.getItem(USER_DATA);
        if(users){
            return JSON.parse(users);
        }
        return [];
    }
    catch(error){
        console.log("error getting user list:" + error.msg)
        return [];
    }
};

export const loginUser = async(email,pwd) => {
    try{
        const data = await getUserList()
        const myUser = data.find( (item) => item.email === email && item.pwd === pwd)
        if(myUser){
            return {
                status: true,
                data: myUser[0],
                msg: "Welcome!" 
            }
        }
        return {
            status: false,
            data: null,
            msg: "No User Found."
        }
    }
    catch(error){
        return {
            status: false,
            data: null,
            msg: "Error"+error.msg
        };
    }
};

export const addUser = async(name,email,pwd,role) => {
    try{
        const data = await getUserList()
        const myUser = data.find( (item) => item.email === email && item.role == role)
        if(myUser){
            return {
                status: false,
                data: null,
                msg: "User already exists"
            }
        }
        const newUser = {
            id: new Date().getMilliseconds,
            name: name,
            email: email,
            pwd: pwd,
            role: role
        }
        await AsyncStorage.setItem(USER_DATA,JSON.stringify([...data,newUser]))
        return {
            status: true,
            data: newUser,
            msg: "Successfully registered."
        }
    }
    catch(error){
        return {
            status: false,
            data : null,
            msg: "Error:" + error.msg
        }
    }
}