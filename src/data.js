import * as THREE from 'three'
import floorB from './assets/img/floorB.jpg'
import bz from './assets/img/bz.jpg'
import bedtop2 from './assets/img/bedtop2.jpg'
import bedRight from './assets/img/bedRight.jpg'
import bedhead2 from './assets/img/bedhead2.jpg'
import door_left from './assets/img/door_left.png'
import door_right from './assets/img/door_right.png'
import doorControl from './assets/img/doorControl.jpg'
import wall from './assets/img/wall.jpg'
import boli from './assets/img/boli.jpg'
import message from './assets/img/message.jpg'
import aircondition from './assets/img/aircondition.jpg'
import tv from './assets/img/tv.jpg'
import rack_door_back from './assets/img/rack_door_back.jpg'
import rack_front_door from './assets/img/rack_front_door.jpg'
import rack_inside from './assets/img/rack_inside.jpg'
import server2 from './assets/img/server2.jpg'
import reset from './assets/img/reset.png'
import connection from './assets/img/connection.png'
import usage from './assets/img/usage.png'
import edit from './assets/img/edit.png'
import alarm from './assets/img/alarm.png'
// import gltf from './assets/mesh/test/scene.gltf'
// import bin from './assets/mesh/test/scene.bin'
import js from './assets/mesh/test/textures/JSquat_baseColor.png'
import pa from './assets/mesh/test/textures/Paper_baseColor.png'
import ri from './assets/mesh/test/textures/Ribbon_baseColor.png'
// console.log(bin)
console.log(js)
console.log(pa)
console.log(ri)
// const Tween = require('@tweenjs/tween.js')

// import createjs from 'latest-createjs'
// import { tweenjs } from 'EaselJS'

let Aobjects = {
  visible:true,
  objects: [
    {
      show: true,
      uuid: "",
      name: 'gltfObj',
      objType: 'gltfObj',
      url: '/mesh/scene.gltf'
    },
    //地板
    {
      show: true,
      uuid: "",
      name: 'floor',
      objType: 'floor',
      length: 3000,
      width: 3000,
      height: 50,
      rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: -500,
      y: 0,
      z: 500,
      style: {
        skinColor: 0x8ac9e2,
        skin: {
          skin_up: {
            skinColor: 0x98750f,
            imgurl: floorB,
            repeatx: true,
            repeaty: true,
            width: 128,
            height: 128
          },
          skin_down: {
            skinColor: 0x8ac9e2,
          },
          skin_fore: {
            skinColor: 0x8ac9e2,
          }
        }
      }
    },
    // 抱枕1
    {
      show: true,
      uuid: "",
      name: 'bolster',
      objType: 'cube',
      rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: 160,
      y: 120,
      z: 400,
      length: 80,
      width: 20,
      height: 60,
      transparent: true,
      opacity: 1,
      rotation: [{ direction: 'x', degree: 120 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      style: {
        skinColor: 0x8ac9e2,
        skin: {
          skin_left: {
            imgurl: bz
          },
          skin_fore: {
            skinColor: 0xC0C0C0,
          },
          skin_behind: {
            skinColor: 0xC0C0C0
          },
          skin_up: {
            skinColor: 0xC0C0C0
          },
          skin_down: {
            skinColor: 0xC0C0C0
          },
        }
      }
    },
    // 抱枕2
    {
      show: true,
      uuid: "",
      name: 'bolster',
      objType: 'cube',
      rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: 30,
      y: 120,
      z: 400,
      length: 80,
      width: 20,
      height: 60,
      transparent: true,
      opacity: 1,
      rotation: [{ direction: 'x', degree: 120 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      style: {
        skinColor: 0x8ac9e2,
        skin: {
          skin_left: {
            imgurl: bz
          },
          skin_fore: {
            skinColor: 0xC0C0C0,
          },
          skin_behind: {
            skinColor: 0xC0C0C0
          },
          skin_up: {
            skinColor: 0xC0C0C0
          },
          skin_down: {
            skinColor: 0xC0C0C0
          },
        }
      }
    },
    // 床
    {
      show: true,
      uuid: "",
      name: 'Bed',
      objType: 'cube',
      rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: 100,
      y: 80,
      z: 270,
      length: 300,
      width: 360,
      height: 50,
      transparent: true,
      opacity: 1,
      style: {
        skinColor: 0x8ac9e2,
        skin: {
          skin_up: {
            imgurl: bedtop2,
          },
          skin_fore: {
            imgurl: bedRight,
          },
          skin_left: {
            imgurl: bedRight
          },
          skin_behind: {
            imgurl: bedRight
          }
        }
      }
    },
    // 床头
    {
      show: true,
      name: 'messagePanel',
      uuid: "",
      objType: 'plane',
      width: 300,
      height: 120,
      pic: bedhead2,
      transparent: true,
      opacity: 1,
      position: { x:100, y: 150, z: 439 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      blending: false,
    },
    // 桌子
    {
      show: true,
      uuid: "",
      name: 'desk',
      objType: 'cube',
      rotation: [{ direction: 'y', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: -800,
      y: 60,
      z: -20,
      length: 400,
      width: 160,
      height: 60,
      transparent: true,
      opacity: 1,
      style: {
        skinColor: 0x8ac9e2,
        skin: {
          skin_up: {
            skinColor: 0xdddddd,
          },
          skin_fore: {

          },
          skin_left: {

          },
          skin_behind: {

          }
        }
      }
    },
    // 烟感器
    {
      show: true,
      uuid: "",
      name: 'smokeDetector',
      objType: 'smokeDetector',
      url:'./obj/yangan_c4d2.fbx',
      rotation: [{ direction: 'x', degree: 0 }],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: 0,
      y: 230,
      z: 240
    },
    //墙体
    {
      show: true,
      uuid: "",
      name: 'wall',
      objType: 'wall',
      thick: 20,
      length: 100,
      height: 240,
      wallData: [
        {//wall1
          uuid: "",
          name: 'wall1',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xb0cee0,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xdeeeee,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -500,
            y: 120,
            z: -350
          },
          endDot: {
            x: 500,
            y: 120,
            z: -350
          },
          rotation: [{ direction: 'x', degree: 0 }],// 旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
          childrens: [
            {
              op: '-',
              show: true,
              uuid: "",
              name: 'doorhole',
              objType: 'doorhole',
              thick: 20,
              height: 220,
              startDot: {
                x: -410,
                y: 110,
                z: -350
              },
              endDot: {
                x: -190,
                y: 110,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xffdddd,
                },
                skin_down: {
                  skinColor: 0xdddddd,
                },
                skin_fore: {
                  skinColor: 0xffdddd,
                },
                skin_behind: {
                  skinColor: 0xffdddd,
                },
                skin_left: {
                  skinColor: 0xffdddd,
                },
                skin_right: {
                  skinColor: 0xffdddd,
                }
              },
            },
            {
              op: '-',
              show: true,
              uuid: "",
              name: 'windowHole',
              objType: 'windowHole',
              thick: 20,
              height: 160,
              startDot: {
                x: -50,
                y: 130,
                z: -350
              },
              endDot: {
                x: 450,
                y: 130,
                z: -350
              }
            },
            {
              show: true,
              name: 'windowCaseBottom',
              uuid: "",
              objType: 'cube',
              thick: 30,
              height: 10,
              startDot: {
                x: -50,
                y: 50,
                z: -350
              },
              endDot: {
                x: 450,
                y: 50,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },

            {
              show: true,
              uuid: "",
              name: 'doorCaseRight',
              objType: 'cube',
              thick: 24,
              height: 220,
              startDot: {
                x: -410,
                y: 110,
                z: -350
              },
              endDot: {
                x: -405,
                y: 110,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorCaseLeft',
              uuid: "",
              objType: 'cube',
              thick: 24,
              height: 220,
              startDot: {
                x: -190,
                y: 110,
                z: -350
              },
              endDot: {
                x: -195,
                y: 110,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorCaseTop',
              uuid: "",
              objType: 'cube',
              thick: 24,
              height: 5,
              startDot: {
                x: -190,
                y: 220,
                z: -350
              },
              endDot: {
                x: -410,
                y: 220,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorCaseBottom',
              uuid: "",
              objType: 'cube',
              thick: 24,
              height: 5,
              startDot: {
                x: -190,
                y: 5,
                z: -350
              },
              endDot: {
                x: -410,
                y: 5,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorLeft',
              uuid: "",
              objType: 'cube',
              thick: 4,
              height: 210,
              startDot: {
                x: -196,
                y: 112,
                z: -350
              },
              endDot: {
                x: -300,
                y: 112,
                z: -350
              },
              skin: {
                opacity: 0.1,
                skin_up: {
                  skinColor: 0x51443e,
                },
                skin_down: {
                  skinColor: 0x51443e,
                },
                skin_fore: {
                  skinColor: 0x51443e,
                },
                skin_behind: {
                  skinColor: 0x51443e,
                },
                skin_left: {
                  skinColor: 0x51443e,
                  imgurl: door_left,
                },
                skin_right: {
                  skinColor: 0x51443e,
                  imgurl: door_right,
                }
              },
            },
            {
              show: true,
              name: 'doorRight',
              uuid: "",
              objType: 'cube',
              thick: 4,
              height: 210,
              startDot: {
                x: -300,
                y: 112,
                z: -350
              },
              endDot: {
                x: -404,
                y: 112,
                z: -350
              },
              skin: {
                opacity: 0.1,
                skin_up: {
                  skinColor: 0x51443e,
                },
                skin_down: {
                  skinColor: 0x51443e,
                },
                skin_fore: {
                  skinColor: 0x51443e,
                },
                skin_behind: {
                  skinColor: 0x51443e,
                },
                skin_left: {
                  skinColor: 0x51443e,
                  imgurl: door_right,
                },
                skin_right: {
                  skinColor: 0x51443e,
                  imgurl: door_left,
                }
              },
            },
            {
              show: true,
              name: 'doorControl',
              uuid: "",
              objType: 'cube',
              thick: 10,
              height: 40,
              startDot: {
                x: -120,
                y: 160,
                z: -365
              },
              endDot: {
                x: -160,
                y: 160,
                z: -365
              },
              skin: {
                opacity: 0.1,
                skin_up: {
                  skinColor: 0x333333,
                },
                skin_down: {
                  skinColor: 0x333333,
                },
                skin_fore: {
                  skinColor: 0x333333,
                },
                skin_behind: {
                  skinColor: 0x333333,
                },
                skin_left: {
                  skinColor: 0x333333,
                  imgurl: doorControl,
                },
                skin_right: {
                  skinColor: 0x333333,
                }
              },
            },
          ]
        },
        {//wall2
          uuid: "",
          name: 'wall2',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xb0cee0,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xdeeeee,
            }
          },
          startDot: {
            x: -500,
            y: 120,
            z: 450
          },
          endDot: {
            x: 500,
            y: 120,
            z: 450
          },
        },
        {//wall3
          uuid: "",
          name: 'wall3',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xb0cee0,
            },
            skin_behind: {
              skinColor: 0xdeeeee,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: 490,
            y: 120,
            z: -355
          },
          endDot: {
            x: 490,
            y: 120,
            z: 455
          },
        },
        {//wall4
          uuid: "",
          name: 'wall4',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xdeeeee,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -490,
            y: 120,
            z: -355
          },
          endDot: {
            x: -490,
            y: 120,
            z: 455
          },
        },
        {
          uuid: "",
          name: 'wall7',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xdeeeee,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -1489,
            y: 120,
            z: -355
          },
          endDot: {
            x: -1489,
            y: 120,
            z: 450
          },
        },
        {
          uuid: "",
          name: 'wall8',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
              imgUrl: 'images/wall.jpg'
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xdeeeee,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -500,
            y: 120,
            z: 450
          },
          endDot: {
            x: -1489,
            y: 120,
            z: 450
          },
        },
        {
          uuid: "",
          name: 'wall9',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xdeeeee,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -1489,
            y: 120,
            z: 0
          },
          endDot: {
            x: -1489,
            y: 120,
            z: 1489
          },
        },
        {
          uuid: "",
          name: 'wall10',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xdeeeee,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: 500,
            y: 120,
            z: 1489
          },
          endDot: {
            x: -1489,
            y: 120,
            z: 1489
          },
        },
        {
          uuid: "",
          name: 'wall11',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xdeeeee,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: 490,
            y: 120,
            z: 450
          },
          endDot: {
            x: 490,
            y: 120,
            z: 1489
          },
        },
        {
          uuid: '',
          name: 'wall5',
          thick: 20, // 厚度
          length: 100, // 长度
          height: 240,  // 高度
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xb0cee0,
            },
            skin_behind: {
              skinColor: 0xb0cee0,
            },
            skin_left: {
              skinColor: 0xdeeeee,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -1489,
            y: 120,
            z: -350
          },
          endDot: {
            x: -500,
            y: 120,
            z: -350
          },
          childrens: [
            {
              op: '-',
              show: true,
              uuid: "",
              name: 'doorhole',
              objType: 'doorhole',
              thick: 20,
              height: 220,
              startDot: {
                x: -1410,
                y: 110,
                z: -350
              },
              endDot: {
                x: -1190,
                y: 110,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xffdddd,
                },
                skin_down: {
                  skinColor: 0xdddddd,
                },
                skin_fore: {
                  skinColor: 0xffdddd,
                },
                skin_behind: {
                  skinColor: 0xffdddd,
                },
                skin_left: {
                  skinColor: 0xffdddd,
                },
                skin_right: {
                  skinColor: 0xffdddd,
                }
              },
            },
            {
              op: '-',
              show: true,
              uuid: "",
              name: 'windowHole',
              objType: 'windowHole',
              thick: 20,
              height: 160,
              startDot: {
                x: -1050,
                y: 130,
                z: -350
              },
              endDot: {
                x: -650,
                y: 130,
                z: -350
              }
            },
            {
              show: true,
              name: 'windowCaseBottom',
              uuid: "",
              objType: 'cube',
              thick: 30,
              height: 10,
              startDot: {
                x: -1050,
                y: 50,
                z: -350
              },
              endDot: {
                x: -650,
                y: 50,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },

            {
              show: true,
              uuid: "",
              name: 'doorCaseRight',
              objType: 'cube',
              thick: 24,
              height: 220,
              startDot: {
                x: -1410,
                y: 110,
                z: -350
              },
              endDot: {
                x: -1405,
                y: 110,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorCaseLeft',
              uuid: "",
              objType: 'cube',
              thick: 24,
              height: 220,
              startDot: {
                x: -1190,
                y: 110,
                z: -350
              },
              endDot: {
                x: -1195,
                y: 110,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorCaseTop',
              uuid: "",
              objType: 'cube',
              thick: 24,
              height: 5,
              startDot: {
                x: -1190,
                y: 220,
                z: -350
              },
              endDot: {
                x: -1410,
                y: 220,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorCaseBottom',
              uuid: "",
              objType: 'cube',
              thick: 24,
              height: 5,
              startDot: {
                x: -1190,
                y: 5,
                z: -350
              },
              endDot: {
                x: -1410,
                y: 5,
                z: -350
              },
              skin: {
                skin_up: {
                  skinColor: 0xc0dee0,
                },
                skin_down: {
                  skinColor: 0xc0dee0,
                },
                skin_fore: {
                  skinColor: 0xc0dee0,
                },
                skin_behind: {
                  skinColor: 0xc0dee0,
                },
                skin_left: {
                  skinColor: 0xd0eef0,
                },
                skin_right: {
                  skinColor: 0xd0eef0,
                }
              },
            },
            {
              show: true,
              name: 'doorLeft',
              uuid: "",
              objType: 'cube',
              thick: 4,
              height: 210,
              startDot: {
                x: -1196,
                y: 112,
                z: -350
              },
              endDot: {
                x: -1300,
                y: 112,
                z: -350
              },
              skin: {
                opacity: 0.1,
                skin_up: {
                  skinColor: 0x51443e,
                },
                skin_down: {
                  skinColor: 0x51443e,
                },
                skin_fore: {
                  skinColor: 0x51443e,
                },
                skin_behind: {
                  skinColor: 0x51443e,
                },
                skin_left: {
                  skinColor: 0x51443e,
                  imgurl: door_left,
                },
                skin_right: {
                  skinColor: 0x51443e,
                  imgurl: door_right,
                }
              },
            },
            {
              show: true,
              name: 'doorRight',
              uuid: "",
              objType: 'cube',
              thick: 4,
              height: 210,
              startDot: {
                x: -1300,
                y: 112,
                z: -350
              },
              endDot: {
                x: -1404,
                y: 112,
                z: -350
              },
              skin: {
                opacity: 0.1,
                skin_up: {
                  skinColor: 0x51443e,
                },
                skin_down: {
                  skinColor: 0x51443e,
                },
                skin_fore: {
                  skinColor: 0x51443e,
                },
                skin_behind: {
                  skinColor: 0x51443e,
                },
                skin_left: {
                  skinColor: 0x51443e,
                  imgurl: door_right,
                },
                skin_right: {
                  skinColor: 0x51443e,
                  imgurl: door_left,
                }
              },
            },
            {
              show: true,
              name: 'doorControl',
              uuid: "",
              objType: 'cube',
              thick: 10,
              height: 40,
              startDot: {
                x: -1120,
                y: 160,
                z: -365
              },
              endDot: {
                x: -1160,
                y: 160,
                z: -365
              },
              skin: {
                opacity: 0.1,
                skin_up: {
                  skinColor: 0x333333,
                },
                skin_down: {
                  skinColor: 0x333333,
                },
                skin_fore: {
                  skinColor: 0x333333,
                },
                skin_behind: {
                  skinColor: 0x333333,
                },
                skin_left: {
                  skinColor: 0x333333,
                  imgurl: doorControl,
                },
                skin_right: {
                  skinColor: 0x333333,
                }
              },
            },
          ]
        },
        {//wall3
          uuid: "",
          name: 'wall6',
          thick: 20,
          height: 240,
          skin: {
            skin_up: {
              skinColor: 0xdddddd,
            },
            skin_down: {
              skinColor: 0xdddddd,
            },
            skin_fore: {
              skinColor: 0xb0cee0,
            },
            skin_behind: {
              skinColor: 0xdeeeee,
            },
            skin_left: {
              skinColor: 0xb0cee0,
            },
            skin_right: {
              skinColor: 0xb0cee0,
            }
          },
          startDot: {
            x: -490,
            y: 120,
            z: 450
          },
          endDot: {
            x: -490,
            y: 120,
            z: 1480
          },
        },
      ],
      style: {
        skinColor: 0x8ac9e2
      }
    },
    //玻璃
    {
      show: true,
      name: 'windowGlass1',
      uuid: "",
      objType: 'glasses',
      width: 500,
      height: 160,
      pic: boli,
      transparent: true,
      opacity: 0.1,
      position: { x: 200, y: 130, z: -350 },
      rotation: { x: 0, y: 0 * Math.PI, z: 0 },
      blending: false,
    },
    //贴海报
    {
      show: true,
      name: 'messagePanel',
      uuid: "",
      objType: 'plane',
      width: 100,
      height: 160,
      pic: message,
      transparent: true,
      opacity: 1,
      position: { x:-250, y: 150, z: 439 },
      rotation: { x: 0, y: Math.PI, z: 0 },
      blending: false,
    },
    //空调
    {
      show: true,
      uuid: "",
      name: 'aircondition',
      objType: 'cube',
      length: 60,
      width: 80,
      height: 220,
      rotation: [{ direction: 'y', degree: 0.3*Math.PI}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: -420,
      y: 110,
      z: 370,
      style: {
        skinColor: 0xfefefe,
        skin: {
          skin_fore: {
            imgurl: aircondition,
          },
        }
      }
    },
    //电视机
    {
      show: true,
      uuid: "",
      name: 'television',
      objType: 'cube',
      length: 10,
      width: 180,
      height: 120,
      rotation: [{ direction: 'x', degree:0}],//旋转 表示x方向0度  arb表示任意参数值[x,y,z,angle]
      x: -480,
      y: 150,
      z: 0,
      style: {
        skinColor: 0x555555,
        skin: {
          skin_fore: {
            imgurl: tv,
          },
        }
      }
    },
    //机柜1-1 --原型
    {
      show:true,
      name: 'cabinet1_1',
      shellname:'cabinet1_1_shell',
      uuid: '',
      // rotation: [{ direction: 'y', degree: 0.25*Math.PI}],//旋转     uuid:'',
      objType: 'emptyCabinet',
      transparent:true,
      size:{length:66,width:70,height:200, thick:2},
      position: { x:300, y: 105, z: -180 },
      doors: {
        doorType:'lr',// ud上下门 lr左右门 单门可以缺省
        doorSize: [1],
        doorname: ['cabinet1_1_door_01'],
        skins:[ {
          skinColor: 0x333333,
          skin_fore: {
            imgurl: rack_door_back,
          },
          skin_behind: {
            imgurl: rack_front_door,
          }
        }]
      },
      skin:{
        skinColor: 0xff0000,
        skin_up: {
          skin:{
            skinColor: 0xff0000,
            skin_up: { imgurl: rack_door_back },
            skin_down: { imgurl: rack_door_back },
            skin_fore: {
              skinColor: 0xff0000,
              imgurl: rack_door_back
            },
            skin_behind: {
              skinColor: 0xff0000,
              imgurl: rack_door_back
            },
            skin_left: { imgurl: rack_door_back },
            skin_right: { imgurl: rack_door_back },
          }
        },
        skin_down: {
          skin: {
            skinColor: 0x333333,
          }
        },
        skin_left: {
          skin: {
            skinColor: 0x333333,
          }
        },
        skin_right: {
          skin: {
            skinColor: 0x333333,
          }
        },
        skin_behind: {
          skin: {
            skinColor: 0x333333,
          }
        }
      }
    },
    //主机1
    {
      show: true,
      uuid: "",
      name: 'equipment_card_1',
      objType: 'cube',
      length: 60,
      width: 65,
      height: 10,
      x: -100,
      y: 105,
      z: -180,
      style: {
        skinColor: 0xff0000,
        skin: {
          skin_up: {
            skinColor: 0xff0000,
            imgurl: rack_inside,
          },
          skin_down: {
            skinColor: 0xff0000,
            imgurl: rack_inside,
          },
          skin_fore: {
            skinColor: 0xff0000,
            imgurl: rack_inside,
          },
          skin_behind: {
            skinColor: 0xff0000,
            imgurl: server2,
          },
          skin_left: {
            skinColor: 0xff0000,
            imgurl: rack_inside,
          },
          skin_right: {
            skinColor: 0xff0000,
            imgurl: rack_inside,
          }
        }
      }
    },
    //主机2
    {
      show: true,
      uuid: "",
      name: 'equipment_card_2',
      objType: 'cube',
      length: 60,
      width: 65,
      height: 20,
      x: -100,
      y: 120,
      z: -180,
      style: {
        skinColor: 0x92630b,
        skin: {
          skin_up: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_down: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_fore: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_behind: {
            skinColor: 0x92630b,
            imgurl: server2,
          },
          skin_left: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_right: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          }
        }
      }
    },
    //主机3
    {
      show: true,
      uuid: "",
      name: 'equipment_card_3',
      objType: 'cube',
      length: 60,
      width: 65,
      height: 30,
      x: -100,
      y: 145,
      z: -180,
      style: {
        skinColor: 0x92630b,
        skin: {
          skin_up: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_down: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_fore: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_behind: {
            skinColor: 0x92630b,
            imgurl: "images/server3.jpg",
          },
          skin_left: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          },
          skin_right: {
            skinColor: 0x92630b,
            imgurl: rack_inside,
          }
        }
      }
    }
  ],
  events: {
    dbclick: [
      {
        obj_name: "doorRight",
        obj_uuid: "",
        obj_event: function (_obj) {
          openRightDoor(_obj, function () { });
          console.dir(_obj)
        }
      },
      {
        obj_name: "doorLeft",
        obj_uuid: "",
        obj_event: function (_obj, _) {

          var doorstate = "close";
          var tempobj = null;
          if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
            doorstate = _obj.doorState;
            tempobj = _obj.parent;
          } else {
            console.log("add parent");
            var _objparent = _obj.parent;
            tempobj = new THREE.Object3D();
            tempobj.position.set(_obj.position.x + _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
            _obj.position.set(-_obj.geometry.parameters.width / 2, 0, 0);
            tempobj.add(_obj);
            _objparent.add(tempobj);
          }
          _obj.doorState = (doorstate == "close" ? "open" : "close");
          new createjs.Tween(tempobj.rotation).to({
            y: (doorstate == "close" ? -0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
          }, 10000, createjs.Ease.elasticOut);
        }
      },
      {
        obj_name: "cabinetdoor3_1",
        obj_uuid: "",
        obj_event: function (_obj) {
          opcabinetdoor(_obj);
        }
      },
      {
        findObject:function(_objname){//查找某一类符合名称的对象
          return ~_objname.indexOf("aircondition")
        },
        obj_uuid: "",
        obj_event: function (_obj, _) {
          _.isPlan.airPlan = !_.isPlan.airPlan
          console.log(_obj.position)
        }
      },
      {
        findObject:function(_objname){//查找某一类符合名称的对象
          console.log(_objname)
          if (_objname.indexOf("smokeDetector") >= 0) {
            return true;
          } else {
            return false;
          }
        },
        obj_uuid: "",
        obj_event: function (_obj, clickPosition) {
          console.log(_obj);
          var div = document.createElement('div')
          div.innerHTML = '<div style="background: #f663;width: 200px;height: 200px;position: absolute;top: 200px;left: 200px;"></div>'
          document.body.appendChild(div)
          msjstation.linkLine(_obj,clickPosition)
        }
      },
      {
        findObject:function(_objname){//查找某一类符合名称的对象
          if (_objname.indexOf("cabinet") >= 0 && _objname.indexOf("door") >= 0) {
            return true;
          } else {
            return false;
          }
        },
        obj_uuid: "",
        obj_event: function (_obj) {
          opcabinetdoor(_obj);
        }
      },
      {
        findObject: function (_objname) {//查找某一类符合名称的对象
          if (_objname.indexOf("equipment") >= 0 && _objname.indexOf("card") >= 0) {
            return true;
          } else {
            return false;
          }
        },
        obj_uuid: "",
        obj_event: function (_obj) {
          var cardstate = "in";
          if (_obj.cardstate != null && typeof (_obj.cardstate) != 'undefined') {
            cardstate = _obj.cardstate;
          } else {
            _obj.cardstate = "out";
          }
          new createjs.Tween(_obj.position).to({
            x: (cardstate == "in" ? _obj.position.x - 50 : _obj.position.x + 50),
          }, 1000,createjs.Ease.linear).call(function () { _obj.cardstate = cardstate == "in" ? "out" : "in"; });
        }
      }
    ],
    mouseDown: {
    },
    mouseUp: {
    },
    mouseMove: {
    }
  },
  btns: [
    {
      btnid: "btn_reset",
      btnTitle: "场景复位",
      btnimg: reset,
      event: function () {
      }
    },
    {
      btnid: "btn_connection",
      btnTitle: "走线管理",
      btnimg: connection,
      event: function () {
      }
    },
    {
      btnid: "btn_usage",
      btnTitle: "机柜利用率",
      btnimg: usage,
      event: function () {
      }
    },
    {
      btnid: "btn_edit",
      btnTitle: "拖拽机柜",
      btnimg: edit,
      event: function () {
      }
    },
    {
      btnid: "btn_alarm",
      btnTitle: "告警巡航",
      btnimg: alarm,
      event: function () {
        var mainCamera = msj3DObj.commonFunc.findObject("mainCamera");//主摄像机
        var doorRight = msj3DObj.commonFunc.findObject("doorRight");
        mainCamera.lookAt(doorRight.position);
        console.log(createjs)
        new createjs.Tween(mainCamera.position).to({
          x:-300, y:200, z:-700,
        }, 5000,createjs.Ease.linear).call(function () {

          openRightDoor(msj3DObj.commonFunc.findObject("doorRight"), function () {
            var cabinet3_1 = msj3DObj.commonFunc.findObject("cabinet3_1");
            mainCamera.lookAt(cabinet3_1.position);
            new createjs.Tween(mainCamera.position).to({
              x: -300, y: 150, z: -200,
            }, 5000,createjs.Ease.linear).call(function () {
              mainCamera.lookAt(cabinet3_1.position);
            });
          });
        });


      }
    },
  ]
}

function opcabinetdoor(_obj) {
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    tempobj.position.set(_obj.position.x, _obj.position.y, _obj.position.z + _obj.geometry.parameters.depth / 2);
    _obj.position.set(0, 0, -_obj.geometry.parameters.depth / 2);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 1000, createjs.Ease.linear);
}
function openRightDoor(_obj,func) {
  var doorstate = "close";
  var tempobj = null;
  if (_obj.doorState != null && typeof (_obj.doorState) != 'undefined') {
    doorstate = _obj.doorState;
    tempobj = _obj.parent;
  } else {
    var _objparent = _obj.parent;
    tempobj = new THREE.Object3D();
    tempobj.position.set(_obj.position.x - _obj.geometry.parameters.width / 2, _obj.position.y, _obj.position.z);
    _obj.position.set(_obj.geometry.parameters.width / 2, 0, 0);
    tempobj.add(_obj);
    _objparent.add(tempobj);
  }
  _obj.doorState = (doorstate == "close" ? "open" : "close");
  new createjs.Tween(tempobj.rotation).to({
    y: (doorstate == "close" ? 0.25 * 2 * Math.PI : 0 * 2 * Math.PI)
  }, 10000, createjs.Ease.elasticOut);
}

export {
  Aobjects
}
