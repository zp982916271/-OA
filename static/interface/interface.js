var host = "http://api.netallin.com/"


//登陆接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var loginUrl = host + "apis/user/login"
//参数:
//  username:""
//  password:""


//获取班级列表
//类型: GET
var classListUrl = host + "apis/class"
//参数:
//  username:""
//  password:""
//范例: http://api.netallin.com/apis/class

//获取用列表
//类型: GET
var userListUrl = host + "apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D"
//参数:
//  默认参数results和size
//范例:  http://api.netallin.com/apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D

//用户搜索接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var serachUrl = host + "apis/student/searchStudents"
//参数:
/*
{
    "page":1,
    "condition":{
        "name":"李雷",
        "id":"",
        "classId":"软工B班",
        "paystate":-1,
        "status":"",
        "idcard":""},
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=.bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c="
    }
*/

//获取费用接口: 点击查看执行
//类型: GET
var feeUrl = host + "apis/student/fee/?"
//http://api.netallin.com/apis/student/fee/?uid=622&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D
//参数1:  uid=      注意, 这个uid是用户的id
//范例:  http://api.netallin.com/apis/student/fee/?uid=622


//添加学员接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var addUserUrl = host+"apis/student"
//参数:
/*
{
    "term":"6",
    "tuition_way":"1",
    "course":"1",
    "cuppon_way":"0",
    "tuitionOrigin":22800,
    "tuitionMinus":0,
    "tuition":22800,
    "room_way":"2",
    "room_rent":3600,
    "room_deposit":600,
    "room_manage":300,
    "room_net":180,
    "pc_way":"1",
    "pc_rent":0,
    "pc_buy":1700,
    "pc_deposit":0,
    "cloth":300,
    "blanket":200,
    "clothflag":"1",
    "blanketflag":"1",
    "fee":6880,
    "feeTotal":29680,
    "name":"潇潇",
    "phone":"13800000000",
    "idcard":"110100201101010001",
    "address":"山西太原",
    "edu_level":"3",
    "edu_school":"",
    "edu_profession":"",
    "classId":"1901",
    "sex":"0",
    "father":"",
    "mother":"mom",
    "fatherPhone":"",
    "motherPhone":"13000000001",
    "source":"3",
    "traffic":"1",
    "enroller":"",
    "consultant":"",
    "remark":"",
    "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=.bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c="
}

*/
