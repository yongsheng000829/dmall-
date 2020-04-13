const user={
    
        username:[
            {message: "请输入用户名",required: true,trigger: 'blur'},
            {min:5,max:10,message:"长度在5-8个字符",trigger:"blur"}
        ],
        password:[
            {message: "请输入密码",required: true,trigger: 'blur'},
            {min:5,max:10,message:"长度在5-8个字符",trigger:"blur"}
        ],            

     
}
export {user}