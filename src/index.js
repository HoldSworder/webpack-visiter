import echarts from 'echarts'
import './css/index.css'
import 'normalize.css'
const themeColor = '#B7E2FF'

class Echarts {
  constructor(id, option) {
    this.theme = 'macarons'
    this.option = option
    this.id = id
    this.initDom = echarts.init(document.querySelector(this.id))

    this.initFuc()
  }

  initFuc() {
    this.initDom.setOption(this.option)
  }

  changeOption(fun) {
    fun.call(this)

    this.initFuc()
  }
}

class personEchart extends Echarts {
  constructor(id, text) {
    let option = {
      title: {
        text: text,
        subtext: '50%',
        x: 'center',
        y: 70,
        itemGap: 10,
        textStyle: {
          color: '#B7E1FF',
          fontWeight: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 24
        },
        subtextStyle: {
          color: '#B7E1FF',
          fontWeight: 'bolder',
          fontSize: 24,
          fontFamily: '微软雅黑'
        }
      },
      series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: [75, 90],
          x: '0%',
          tooltip: {
            show: false
          },
          data: [{
              name: '达成率',
              value: 79,
              itemStyle: {
                color: 'rgba(0,153,255,0.8)'
              },
              hoverAnimation: false,
              label: {
                show: false,
                position: 'center',
                textStyle: {
                  fontFamily: '微软雅黑',
                  fontWeight: 'bolder',
                  color: '#B7E1FF',
                  fontSize: 24
                }
              },
              labelLine: {
                show: false
              }
            },
            {
              name: '79%',
              value: 21,
              itemStyle: {
                color: 'rgba(0,153,255,0.1)'
              },
              hoverAnimation: false,
              label: {
                show: false,
                position: 'center',
                padding: 20,
                textStyle: {
                  fontFamily: '微软雅黑',
                  fontSize: 24,
                  color: '#B7E1FF'
                }
              },
              labelLine: {
                show: false
              }
            }
          ]
        },
        {
          type: 'pie',
          center: ['50%', '50%'],
          radius: [95, 100],
          x: '0%',
          hoverAnimation: false,
          data: [{
            value: 100,
            itemStyle: {
              color: 'rgba(0,153,255,0.3)'
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }]
        },
        {
          type: 'pie',
          center: ['50%', '50%'],
          radius: [69, 70],
          x: '0%',
          hoverAnimation: false,
          data: [{
            value: 100,
            itemStyle: {
              color: 'rgba(0,153,255,0.3)'
            },
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }]
        }
      ]
    }
    super(id, option)

    this.allNum = 100
  }

  updatePerson(num) {
    this.option.series[0].data[0].value = num
    this.option.title.subtext = num + '人'
    this.option.series[0].data[1].value = this.allNum - num

    this.initFuc()
  }
}

class carEchart extends Echarts {
  constructor(id, title) {
    let color = ['#F35331', '#2499F8', '#3DF098', '#33B734']

    let option = {
      title: {
        text: '', //标题文本内容
        x: 'center'
      },
      toolbox: { //可视化的工具箱
        show: false,
      },
      tooltip: { //弹窗组件
        formatter: "{a} <br/>{b} : {c}%"
      },
      series: [{
        type: 'gauge',
        axisLine: { // 坐标轴线
          lineStyle: { // 属性lineStyle控制线条样式
            color: [
              [0.2, color[0]],
              [0.8, color[1]],
              [1, color[2]]
            ],
            width: 18
          }
        },
        splitLine: { // 分隔线
          show: true,
          length: 18,
          lineStyle: {
            color: '#28292D',
            width: 1
          }
        },
        axisTick: { //刻度线样式（及短线样式）
          show: false,
          lineStyle: {
            color: 'auto',
            width: 1
          },
          length: 20
        },
        axisLabel: {
          color: '#FFF',
          fontSize: 14,
          fontFamily: 'Verdana, Geneva, sans-serif'
        },
        title: {
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 16,
            color: '#FFF'
          },
          offsetCenter: [0, '20%']
        },
        pointer: {
          width: 5,
          color: '#F00',
          shadowColor: '#FF0',
          shadowBlur: 10
        },
        detail: {
          // show: false,
          formatter: '{value}辆',
          textStyle: {
            fontFamily: 'Arial',
            color: themeColor,
            fontSize: '32px'
          },
          offsetCenter: [0, '90%']
        },
        data: [{
          value: 45,
          name: title
        }]
      }]
    }
    super(id, option)
  }

  updateCar(num) {
    this.option.series[0].data[0].value = num
    this.initFuc()
  }
}

class personInEchart extends Echarts {
  constructor(id) {
    let data = [
      ['amount', 'product'],
      [58212, '枣庄市科瑞电力设备有限公司'],
      [78254, '苏州维赛克阀门检测技术有限公司'],
      [41032, '发电部'],
      [12755, '技术支持部'],
      [20145, '中地电气巡检'],
      [79146, '北京高能时代环境技术股份有限公司'],
      [91852, '烟台源帝物流'],
      // [101852, 'hh'],
      // [101852, 'hhh'],
      // [101852, 'hh1'],
      // [101852, 'hh2'],
      // [101854, 'hh3'],
      // [101854, 'hh32'],
      // [101854, 'hh33'],
      // [101854, 'hh34'],
      // [101854, 'hh35'],
      // [101854, 'hh36'],
      // [101854, 'hh37'],
      // [101854, 'hh38'],
      // [101854, 'hh39'],
      // [101854, 'hh322'],
      // [101854, 'hh3212'],
      // [101854, 'hh312'],
      // [101854, 'hh35'],
      // [20112, 'ii']
    ]

    let option = {
      dataset: {
        source: data
      },
      grid: {
        containLabel: true
      },
      xAxis: {
        name: 'amount'
      },
      yAxis: {
        type: 'category'
      },
      textStyle: {
        fontFamily: 'Arial',
        color: themeColor,
        fontSize: '32px'
      },
      visualMap: {
        show: false,
        inRange: {
          color: '#026ab3'
        }
      },
      series: [{
        type: 'bar',
        encode: {
          x: 'amount',
          y: 'product'
        }
      }]
    }
    super(id, option)
  }

  updateData(src) {
    this.option.dataset.source = src
    this.initFuc()
  }
}

class rollText {
  constructor(text, speed = 20, smooth = 1) {
    this.text = text
    this.speed = speed
    this.smooth = smooth
    this.id = '#roll_text'
    this.dom = document.querySelector(this.id)
    this.height = 0
    this.nowIndex = 0

    this.init()
  }

  init() {
    const THAT = this

    this.dom.innerHTML = `<p>${this.text}</p>`

    this.height = this.dom.offsetHeight

    setInterval(function() {
      if(Math.abs(THAT.nowIndex) <= THAT.height) {
        THAT.nowIndex = parseInt(THAT.dom.children[0].style.top == '' ? 0 : THAT.dom.children[0].style.top)
        THAT.nowIndex -= THAT.smooth
        THAT.dom.children[0].style.top = `${THAT.nowIndex}px`
      }else {
        THAT.dom.children[0].style.top = 0
        THAT.nowIndex = 0
      }
    }, THAT.speed)
  }
}


const personAll = new personEchart('#person_all', "总人数"),
  personIn = new personEchart('#person_in', "内部"),
  personOut = new personEchart('#person_out', "外部"),
  personVisit = new personEchart('#person_visit', "访客")

const carIn = new carEchart('#car_in', '场内'),
  carSign = new carEchart('#car_sign', '登记'),
  carOut = new carEchart('#car_out', '离签')

const personInAuth = new personInEchart('#person_auth')

const rollTextObj = new rollText(`上述代码中，name 和 age 实例对象person自身的属性（因为定义在this变量上） ，所以hasOwnProperty方法返回true，而say是原型对象的属性（因为定义在Person类上），所以hasOwnProperty方法返回false；
6.与函数一样，可以使用表达式的形式定义一个类，即
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
}

值得注意的是，这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，用来指代当前类；如果类的内部没用到的话，可以省略Me，写成下面的形式：
const MyClass = class {
  getClassName() {
    return Me.name;
  }
}

7.采用 Class 表达式，可以写出立即执行的 Class。
let Person = new class {
  constructor(name , age ) {
    this.name = name;
    this.age = age;
  }

  say() {
    return 'My name is ' + this.name + ', I am ' + this.age + ' years old';
  }
}('Jack' , 23 );

Person.say();   // 'My name is Jack, I am 23 years old'

8.ES6中类不存在变量提升，不会把类的声明提升到代码头部，即如果类使用在前，定义在后，这样会报错；
new Person();   //Uncaught ReferenceError : Person is not defined
class Person{}

9.跟ES5一样，ES6的类定义中，也不支持私有属性和私有方法，只能通过变通的方法模拟实现（命名上加下划线等）；
10.可以在一个类的方法前，加上static关键字，声明其为‘静态方法’，这样就表示该方法不会被实例继承，而是直接通过类来调用；

作者：Cryptic
链接：https://www.jianshu.com/p/20f517a2b31c
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。`)







carIn.updateCar((Math.random() * 100).toFixed(0))



personAll.updatePerson(100)
personIn.updatePerson(50)
personOut.updatePerson(50)
personVisit.updatePerson(0)