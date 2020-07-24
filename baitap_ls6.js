function bt_ls6(){
	return bai1();
}
function bai1(){
	var NhanVien = (name, age, salary)=>{
		this.name = name;
		this.age = age;
		this.salary = salary;
	}
	var arr = [
		{ 	"name":"tuan anh", 
			"age": "20", 
			"salary": "20000"
		},
		{ 	"name":"tuan hung", 
			"age": "27", 
			"salary": "20000"
		},
		{ 	"name":"tuan dat", 
			"age": "20", 
			"salary": "20000"
		},
		{ 	"name":"tuan com", 
			"age": "20", 
			"salary": "20000"
		},
		{ 	"name":"tuan soi", 
			"age": "16", 
			"salary": "20000"
		},
		{ 	"name":"tuan anh", 
			"age": "14", 
			"salary": "20000"
		},
		{ 	"name":"trung", 
			"age": "15", 
			"salary": "20000"
		},
		{ 	"name":"tuan", 
			"age": "14", 
			"salary": "2000"
		},
		{ 	"name":"truong", 
			"age": "14", 
			"salary": "241323"
		},
		{ 	"name":"duong", 
			"age": "35", 
			"salary": "20000"
		},
		{ 	"name":"peter", 
			"age": "14", 
			"salary": "20450"
		},
		{ 	"name":"mary", 
			"age": "35", 
			"salary": "20000"
		},
		{ 	"name":"meo", 
			"age": "35", 
			"salary": "20000"
		},
		{ 	"name":"cun", 
			"age": "35", 
			"salary": "20000"
		},
		{ 	"name":"tiger", 
			"age": "35", 
			"salary": "20000"
		},
		{ 	"name":"john", 
			"age": "35", 
			"salary": "20000"
		},
		{ 	"name":"ronaldo", 
			"age": "35", 
			"salary": "20000"
		}

	];
	var creathtml = (item)=>{
		var string = `<div id="table">
			<table>
                <tbody>
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.salary}</td>
                    </tr>
                </tbody>
            </table>
		</div>
		`
		return string;
	} 
	console.log(arr);
	var pagination = () => {
		var totalpage = 0;
		var page = 1;
		var ref = 5;
		while(page <= 2){
			var start = (page - 1) * ref;
			var end = page  * ref;
			var arrr = arr.slice(start, end);
			var html = arrr.map((item) =>{
				return creathtml(item);
			}).join("");
			return html;
		}
		page++;
	}
	var tb = pagination();
	return tb;
    
}
document.getElementById("bai1").innerHTML = bai1();