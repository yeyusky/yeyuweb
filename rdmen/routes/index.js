var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var multer = require("multer");
var crypto = require("crypto");


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// 首页模块
router.get("/", function(req, res) {
  var str = `select * from rd_bannar  
	   where id<4`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    var str1 = `select * from rd_bannar1`;
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "rdmen"
    });
    con.connect();
    con.query(str1, function(e1, r1, f1) {
      var wel = "";
      var id = req.cookies.userID;
      if (
        req.cookies.hasLog == null ||
        req.cookies.hasLog == undefined ||
        req.cookies.hasLog == "0"
      ) {
        wel = "你好，请<a href='login.html'>登录</a>";
        var str2 = `select * from rd_user where id=${id}`;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "rdmen"
        });
        con.connect();
        con.query(str2, function(e2, r2, f2) {
          res.render("index", { dt: r, title: wel, dt1: r1,dt2:r2});
          res.end();
        });
        con.end();
        res.render("index", { dt: r, title: wel, dt1: r1});
        res.end();
      } else {
        var str2 = `select * from rd_user where id=${id}`;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "rdmen"
        });
        con.connect();
        con.query(str2, function(e2, r2, f2) {
          if (r2.length > 0) {
            wel = `你好,欢迎` + r2[0].username + `<a href='/logout'>退出</a><img src="uploads/userpic/`+r2[0].upic+`">`;
            // res.render("index", { dt: r,title:wel});
          } else {
            wel = "你好，请<a href='login.html'>登录</a>";
          }
          res.render("index", { dt: r, title: wel, dt1: r1,dt2:r2});
          // res.end();
        });
        con.end();
      }
      // res.render("index", { dt: r,title:wel,dt2:r2});
      // res.end();
    });
    con.end();
  });
  con.end();
});
// 注册模块
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/userpic');
  },
  filename: function (req, file, cb) {
       //file originalname 原始的名字
       //file fieldname 组件名 <input name="dd"/>
       //file mimetype: image/jpeg
       //file encoding :7zip
    var n=file.originalname;
    var m=n.lastIndexOf('.');
    var ext=n.substring(m);
    var z='';
    var s=(new Date()).getTime()+""+parseInt(Math.random()*10000);
    var secret = s;
    var hash = crypto.createHmac('sha256', secret).digest('hex');
    z=hash+""+ext;
    var obj = {name:file.fieldname,value:z};
    req.mypic.push(obj);
    cb(null, z);
  }
});
  var upload = multer({ storage: storage });
  
  router.use('/reg',function(req,res,next){
    req.mypic=[];
    next();
  });
  router.use('/reg',upload.fields(
    [
      { name: 'pic', maxCount: 1 }
    ]
  ));
router.post("/reg", function(req, res) {
  var inobj = req.body;
  var str="insert into rd_user (username,password,cpassword,sex,tel,email,upic,userqx) values ('"+inobj.u+"','"+inobj.p+"','"+inobj.cp+"','"+inobj.s+"','"+inobj.ph+"','"+inobj.em+"','"+req.mypic[0].value+"','0')";
  // var str = `insert into rd_user (username,password,cpassword) values ('${
  //   inobj.u
  // }','${inobj.p}','${inobj.cp}')`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect()
  con.query(str, function(e, r, f) {
    if (r.affectedRows >= 1) {
      res.redirect("login.html");
      res.end();
    } else {
      res.redirect("reg.html?meg=4601");
      res.end();
    }
  });
  con.end();
});
//注册校验
router.post("/testreg",function(req,res){
  var inobj = req.body;
  var str = "select * from rd_user where username = '"+inobj.u+"'";
  var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rdmen"
  });
  con.connect();
  con.query(str,function(e,r,f){
    if(r.length>=1){
      res.json({"hasUser":1});
    }else{
      res.json({"hasUser":0});
    }
  });
  con.end();
});
// 登录模块
router.post("/login", function(req, res) {
  var inobj = req.body;
  var str = `select * from rd_user where username = '${
    inobj.u
  }' && password = '${inobj.p}'`;
  // var str=`insert rd_user (username,password,cpassword) values ('${inobj.u}','${inobj.p}','${inobj.cp}')`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    if (r.length == 0) {
      res.cookie("hasLog", 0, { maxAge: 30 * 24 * 3600 * 1000 });
      res.cookie("userID", 0, { maxAge: 30 * 24 * 3600 * 1000 });
      res.redirect("/login.html?meg=4602");
      res.end();
    } else if(r.length >0 && r[0].userqx == 0){
      res.cookie("hasLog", 1, { maxAge: 30 * 24 * 3600 * 1000 });
      res.cookie("userID", r[0].id, { maxAge: 30 * 24 * 3600 * 1000 });
      res.redirect("/");
      res.end();
    }
    else if(r.length >0 && r[0].userqx == 1){
      res.cookie("hasLog", 2, { maxAge: 30 * 24 * 3600 * 1000 });
      res.cookie("userID", r[0].id, { maxAge: 30 * 24 * 3600 * 1000 });
      res.redirect("/admin/alogin.html");
      res.end();
    }
  });
  con.end();
});
// 登录退出模块
router.get("/logout", function(req, res) {
  res.clearCookie("hasLog");
  res.clearCookie("userID");
  res.redirect("/");
  res.end();
});
// 新闻列表模块
router.get("/news", function(req, res) {
  var inobj = req.query;
  var pg = inobj.page || 0;
  var count = 4;
  var str = `select * from rd_news 
	   order by ndata DESC limit ${pg * count},${count}`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    function formdate(d) {
      var y = d.getFullYear();
      var m = d.getMonth() + 1;
      var day = d.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (day < 10) {
        day = "0" + day;
      }
      return y + "-" + m + "-" + day;
    }
    var str1 = `select count(*) as l from rd_news`;
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "rdmen"
    });
    con.connect();
    con.query(str1, function(e1, r1, f1) {
      res.render("news", {
        dt: r,
        fd: formdate,
        total: Math.ceil(r1[0].l / count),
        cur: pg
      });
      res.end();
    });
    con.end();
  });
  con.end();
});
// 新闻详情模块
router.get("/newsdetail", function(req, res) {
  var inobj = req.query;
  var str = `select * from rd_news where id=${inobj.id}`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    function formdate(d) {
      var y = d.getFullYear();
      var m = d.getMonth() + 1;
      var day = d.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (day < 10) {
        day = "0" + day;
      }
      return y + "-" + m + "-" + day;
    }
    res.render("newsdetail", { dt: r, fd: formdate });
    res.end();
  });
  con.end();
});

// 品牌介绍模块
router.get("/brand", function(req, res) {
  var str = `select * from rd_sta where id=2`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    res.render("brand", { dt3: r });
    res.end();
  });
  con.end();
});
router.get("/about", function(req, res) {
  var str = `select * from rd_sta where id=1`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    res.render("about", { dt4: r });
    res.end();
  });
  con.end();
});

// 全系列产品

router.get("/goods", function(req, res) {
  var str = `select * from rd_bannar  
	   where id<4`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    var str1 = `select * from rd_goodtle where tid=1`;
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "rdmen"
    });
    con.connect();
    con.query(str1, function(e1, r1, f1) {
      var str2 = `select * from rd_goodtle where tid=2`;
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "rdmen"
      });
      con.connect();
      con.query(str2, function(e2, r2, f2) {
        var str3 = `select * from rd_goodtle where tid=3`;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "rdmen"
        });
        con.connect();
        con.query(str3, function(e3, r3, f3) {
          res.render("goods", { dt: r, dt1: r1, dt2: r2, dt3: r3 });
          res.end();
        });
        con.end();
      });
      con.end();
    });
    con.end();
  });
  con.end();
});

// 商品列表模块
router.get("/goodslist", function(req, res) {
  var str = `select * from rd_bannar  
	   where id<4`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    var inobj = req.query;
    var id1 = inobj.id;
    var str1 = `select * from rd_goodtle where tid=1`;
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "rdmen"
    });
    con.connect();
    con.query(str1, function(e1, r1, f1) {
      var inobj = req.query;
      var id2 = inobj.id;
      var str2 = `select * from rd_goodtle where tid=2`;
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "rdmen"
      });
      con.connect();
      con.query(str2, function(e2, r2, f2) {
        var inobj = req.query;
        var id3 = inobj.id;
        var str3 = `select * from rd_goodtle where tid=3`;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "rdmen"
        });
        con.connect();
        con.query(str3, function(e3, r3, f3) {
          var inobj = req.query;
          var pg = inobj.page || 0;
          var count = 6;
          var str4 = `select * from rd_goods where gid=${inobj.id} limit ${pg *
            count},${count}`;
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "rdmen"
          });
          con.connect();
          con.query(str4, function(e4, r4, f4) {
            var str5 = `select count(*) as l from rd_goods where gid=${
              inobj.id
            }`;
            var con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "",
              database: "rdmen"
            });
            con.connect();
            con.query(str5, function(e5, r5, f5) {
              var inobj = req.query;
              var str6 = `select * from rd_goodtle where id=${inobj.id}`;
              var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database: "rdmen"
              });
              con.connect();
              con.query(str6, function(e6, r6, f6) {
                res.render("goodslist", {
                  dt: r,
                  dt1: r1,
                  cur1: id1,
                  dt2: r2,
                  cur2: id2,
                  dt3: r3,
                  cur3: id3,
                  dt4: r4,
                  dt6: r6,
                  total: Math.ceil(r5[0].l / count),
                  cur: pg
                });
                res.end();
              });
              con.end();
            });
            con.end();
          });
          con.end();
        });
        con.end();
      });
      con.end();
    });
    con.end();
  });
  con.end();
});
// 商品详情模块
router.get("/goodsdetail", function(req, res) {
  var inobj = req.query;
  var str = `select * from rd_goodsdeta where id=${inobj.id}`;
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rdmen"
  });
  con.connect();
  con.query(str, function(e, r, f) {
    var inobj = req.query;
    var str1 = `select * from rd_goods where id=${inobj.id}`;
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "rdmen"
    });
    con.connect();
    con.query(str1, function(e1, r1, f1) {
      var inobj = req.query;
      var str2 = `select * from rd_goodsdeta where id=${inobj.id}`;
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "rdmen"
      });
      con.connect();
      con.query(str2, function(e2, r2, f2) {
        var inobj = req.query;
        var str3 = `select * from rd_goodsdetapic where pid=${inobj.id}`;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "rdmen"
        });
        con.connect();
        con.query(str3, function(e3, r3, f3) {
          res.render("goodsdetail", { dt: r, dt1: r1, dt2: r2, dt3: r3 });
          // res.end();
        });
        con.end();
        // res.render("goodsdetail", { dt:r,dt1: r1,dt2:r2});
        // // res.end();
      });
      con.end();
    });
    con.end();
  });
  con.end();
});
module.exports = router;
