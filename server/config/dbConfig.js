module.exports ={
    HOST: 'localhost',
    USER:'root',
    PASSWORD:'',
    DB:'restapi',
    dialect: 'mysql',  //which type of database 

    pool:{
        max:5,
        min:0, //if static page then no connection
        acquire: 30000, //if not lost in 10s then it will definitely lost in 30s
        idel:10000  // ideally connection will lost in 10s
    }
}