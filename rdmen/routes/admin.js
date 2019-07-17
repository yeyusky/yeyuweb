var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var multer = require("multer");
var crypto = require("crypto");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});
// 管理员登录
router.post("/alogin", function(req, res) {
  var inobj = req.body;
  console.log(inobj);
  var str = `select * from rd_user where username = '${
    inobj.u
  }' && password = '${inobj.p}' && userqx = 1`;
  // var str=`insert rd_user (username,password,cpassword) values ('${inobj.u}','${inobj.p}','${inobj.cp}')`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    //如果该用户不存在 就清除cookie 不让其访问管理员界面  回到主页面
    if (r.length == 0) {
      res.clearCookie("hasLog");
      res.clearCookie("userID");
      res.redirect("/");
      res.end();
    } else if(r.length >0){
      //如果存在 进入到管理员页面
      res.redirect("/admin/admin.html");
      res.end();
    }
  });
  con.end();
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function(req, file, cb) {
    //file originalname 原始的名字
    //file fieldname 组件名 <input name="dd"/>
    //file mimetype: image/jpeg
    //file encoding :7zip
    var n = file.originalname;
    var m = n.lastIndexOf(".");
    var ext = n.substring(m);
    var z = "";
    var s = new Date().getTime() + "" + parseInt(Math.random() * 10000);
    var secret = s;
    var hash = crypto.createHmac("sha256", secret).digest("hex");
    z = hash + "" + ext;
    var obj = { name: file.fieldname, value: z };
    req.mypic.push(obj);
    cb(null, z);
  }
});
var upload = multer({ storage: storage });

router.use("/uppic",function(req, res, next) {
  req.mypic = [];
  next();
});
router.use("/uppic",
  upload.fields([
    { name: "pic", maxCount: 1 }
  ])
);
//更新轮播图
router.post("/uppic", function(req, res) {
  var inobj = req.body;
  // var str="insert into rd_bannar (pic) values ('"+req.mypic[0].value+"')";
  var str =
    "update rd_bannar set pic='" +
    req.mypic[0].value +
    "' where id='" +
    inobj.id +
    "'";
    // console.log(str);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    console.log(r);
    res.send("更新成功");
    res.end();
  });
  con.end();
});

// 添加新闻
router.post("/adnews", function(req, res) {
  var inobj = req.body;
  var str="insert into rd_news (ntitle,ndesc,ncon,ndata) values ('"+inobj.nt+"','"+inobj.nd+"','"+inobj.nc+"',now())";
  // var str = `insert into rd_sta (stitle,sdesc,scon) values ('${
  //   inobj.nt
  // }','${inobj.nd}','${inobj.nc}')`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    res.send("发布成功");
    res.end();
  });
  con.end();
});
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads/upload3");
  },
  filename: function(req, file, cb) {
    //file originalname 原始的名字
    //file fieldname 组件名 <input name="dd"/>
    //file mimetype: image/jpeg
    //file encoding :7zip
    var n = file.originalname;
    var m = n.lastIndexOf(".");
    var ext = n.substring(m);
    var z = "";
    var s = new Date().getTime() + "" + parseInt(Math.random() * 10000);
    var secret = s;
    var hash = crypto.createHmac("sha256", secret).digest("hex");
    z = hash + "" + ext;
    var obj = { name: file.fieldname, value: z };
    req.mypic.push(obj);
    cb(null, z);
  }
});
var upload = multer({ storage: storage });

router.use("/upgoods",function(req, res, next) {
  req.mypic = [];
  next();
});
router.use("/upgoods",
  upload.fields([
    { name: "gpic", maxCount: 1 }
  ])
);
// 添加商品
router.post("/upgoods", function(req, res) {
  var inobj = req.body;
  var str="insert into rd_goods (gid,gtitle,gdesc,gpic) values ('"+inobj.gid+"','"+inobj.gtitle+"','"+inobj.gdesc+"','"+req.mypic[0].value+"')";
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    res.send("添加成功");
    res.end();
  });
  con.end();
});
// 添加商品描述
router.post("/upgoodsdetail", function(req, res) {
  var inobj = req.body;
  // var str="update rd_goodsdeta set gdl='"+inobj.gdl+"' where id='"+inobj.id+"' " ;
  var str="insert into rd_goodsdeta (gdt,gdd,gdp,gdg,gdte,gdc,gdf,gdj,gdz,gdl) values ('"+inobj.gdt+"','"+inobj.gdd+"','"+inobj.gdp+"','"+inobj.gdg+"','"+inobj.gdte+"','"+inobj.gdc+"','"+inobj.gdf+"','"+inobj.gdj+"','"+inobj.gdz+"','"+inobj.gdl+"')";
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    console.log(r);
    res.send("添加成功");
    res.end();
  });
  con.end();
});
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads');
//   },
//   filename: function (req, file, cb) {
//        //file originalname 原始的名字
//        //file fieldname 组件名 <input name="dd"/>
//        //file mimetype: image/jpeg
//        //file encoding :7zip
//     var n=file.originalname;
//     var m=n.lastIndexOf('.');
//     var ext=n.substring(m);
//     var z='';
//     var s=(new Date()).getTime()+""+parseInt(Math.random()*10000);
//     var secret = s;
//     var hash = crypto.createHmac('sha256', secret).digest('hex');
//     z=hash+""+ext;
//     var obj = {name:file.fieldname,value:z};
//     req.mypic.push(obj);
//     cb(null, z);
//   }
// })
//   var upload = multer({ storage: storage });

//   router.use(function(req,res,next){
//     req.mypic=[];
//     next();
//   })
//   router.use(upload.fields(
//     [
//       { name: 'pic', maxCount: 1 },
//       { name: 'pic1', maxCount: 1 },
//       { name: 'pic2', maxCount: 3 },
//       { name: 'pic3', maxCount: 1 }
//     ]
//   ));

// router.post("/upfile2",function(req,res){
//   var str="update rd_sta set spic='"+req.mypic[0].value+"' where id=1 " ;
// //   var str = `insert into rd_news (ntitle,ndesc,ncon,ndata) values ('${
// //     inobj.nt
// //   }','${inobj.nd}','${inobj.nc}',now())`;
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "rdmen"
//   });
//   con.connect();
//   con.query(str, function(e, r, f) {
//     console.log(r);
//     console.log(req.mypic[0].value);
//     res.send("上传成功");
//     res.end();
//   });
//   con.end();
// });

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/upload3');
//   },
//   filename: function (req, file, cb) {
//        //file originalname 原始的名字
//        //file fieldname 组件名 <input name="dd"/>
//        //file mimetype: image/jpeg
//        //file encoding :7zip
//     var n=file.originalname;
//     var m=n.lastIndexOf('.');
//     var ext=n.substring(m);
//     var z='';
//     var s=(new Date()).getTime()+""+parseInt(Math.random()*10000);
//     var secret = s;
//     var hash = crypto.createHmac('sha256', secret).digest('hex');
//     z=hash+""+ext;
//     var obj = {name:file.fieldname,value:z};
//     req.mypic.push(obj);
//     cb(null, z);
//   }
// })
//   var upload = multer({ storage: storage });

//   router.use(function(req,res,next){
//     req.mypic=[];
//     next();
//   })
//   router.use(upload.fields(
//     [
//       { name: 'pic', maxCount: 1 },
//       { name: 'pic1', maxCount: 1 },
//       { name: 'pic2', maxCount: 3 },
//       { name: 'pic3', maxCount: 1 }
//     ]
//   ));

// router.post("/upfile3",function(req,res){
//   var inobj = req.body;
//   var str="update rd_goodsdeta set gdpic='"+req.mypic[0].value+"' where id='"+inobj.id+"'";
// //   var str = `insert into rd_news (ntitle,ndesc,ncon,ndata) values ('${
// //     inobj.nt
// //   }','${inobj.nd}','${inobj.nc}',now())`;
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "rdmen"
//   });
//   con.connect();
//   con.query(str, function(e, r, f) {
//     console.log(r);
//     console.log(req.mypic[0].value);
//     res.send("上传成功");
//     res.end();
//   });
//   con.end();
// });
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/upload4');
//   },
//   filename: function (req, file, cb) {
//        //file originalname 原始的名字
//        //file fieldname 组件名 <input name="dd"/>
//        //file mimetype: image/jpeg
//        //file encoding :7zip
//     var n=file.originalname;
//     var m=n.lastIndexOf('.');
//     var ext=n.substring(m);
//     var z='';
//     var s=(new Date()).getTime()+""+parseInt(Math.random()*10000);
//     var secret = s;
//     var hash = crypto.createHmac('sha256', secret).digest('hex');
//     z=hash+""+ext;
//     var obj = {name:file.fieldname,value:z};
//     req.mypic.push(obj);
//     cb(null, z);
//   }
// })
//   var upload = multer({ storage: storage });

//   router.use(function(req,res,next){
//     req.mypic=[];
//     next();
//   })
//   router.use(upload.fields(
//     [
//       { name: 'pic', maxCount: 1 },
//       { name: 'pic1', maxCount: 1 },
//       { name: 'pic2', maxCount: 3 },
//       { name: 'pic3', maxCount: 1 }
//     ]
//   ));

// router.post("/upfile4",function(req,res){
//   var inobj = req.body;
//   // var str="update rd_goodsdeta set gdpic='"+req.mypic[0].value+"' where id='"+inobj.id+"'";
//   var str = "insert into rd_goodsdetapic (gdetapic,pid) values ('"+req.mypic[0].value+"','"+inobj.id+"')";
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "rdmen"
//   });
//   con.connect();
//   con.query(str, function(e, r, f) {
//     console.log(r);
//     console.log(req.mypic[0].value);
//     res.send("上传成功");
//     res.end();
//   });
//   con.end();
// });


//修改权限
router.post("/chgqx", function(req, res) {
  var inobj = req.body;
  var str = 
  "update rd_user set userqx='" +
    inobj.qx +
    "' where username='" +
    inobj.u +
    "'";
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    res.send("修改成功");
    res.end();
  });
  con.end();
});
module.exports = router;
