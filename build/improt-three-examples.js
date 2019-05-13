var loaderBaseArr = [
  '3MFLoader',
  'AMFLoader',
  'AssimpJSONLoader',
  'AssimpLoader',
  'AWDLoader',
  'BabylonLoader',
  'BVHLoader',
  'ColladaLoader',
  'DDSLoader',
  'DRACOLoader',
  'EquirectangularToCubeGenerator',
  'EXRLoader',
  'FBXLoader',
  'GCodeLoader',
  'GLTFLoader',
  'HDRCubeTextureLoader',
  'KMZLoader',
  'KTXLoader',
  'LoaderSupport',
  'MD2Loader',
  'MMDLoader',
  'MTLLoader',
  'NodeMaterialLoader',
  'NRRDLoader',
  'OBJLoader',
  'OBJLoader2',
  'PCDLoader',
  'PDBLoader',
  'PlayCanvasLoader',
  'PLYLoader',
  'PRWMLoader',
  'PVRLoader',
  'RGBELoader',
  'STLLoader',
  'SVGLoader',
  'TDSLoader',
  'TGALoader',
  'TTFLoader',
  'VRMLLoader',
  'VRMLoader',
  'VTKLoader',
  'XLoader'
]
var loaderSpecialArr = [
  {
    name: 'CTMLoader',
    path: 'three/examples/js/loaders/ctm/CTMLoader',
    install: [{
      name: 'CTM',
      path: 'three/examples/js/loaders/ctm/ctm.js',
      install: [
        {
          name: 'LZMA',
          path: 'three/examples/js/loaders/ctm/lzma.js'
        }
      ]
    }]
  },
  {
    name: 'LegacyGLTFLoader',
    path: 'three/examples/js/loaders/deprecated/CTMLoader',
  },
  {
    name: 'LegacyJSONLoader',
    path: 'three/examples/js/loaders/deprecated/CTMLoader',
  },
  {
    name: 'SEA3DLoader',
    path: 'three/examples/js/loaders/sea3d/SEA3DLoader',
    install: [
      {
        name: 'SEA3D',
        path: 'three/examples/js/loaders/sea3d/SEA3D'
      },
      {
        name: 'SEA3DDeflate',
        path: 'three/examples/js/loaders/sea3d/SEA3DDeflate'
      },
      {
        name: 'SEA3DDraco',
        path: 'three/examples/js/loaders/sea3d/SEA3DDraco'
      },
      {
        name: 'SEA3DLegacy',
        path: 'three/examples/js/loaders/sea3d/SEA3DLegacy'
      },
      {
        name: 'SEA3DLZMA',
        path: 'three/examples/js/loaders/sea3d/SEA3DLZMA',
        install: [{
          name: 'SEA3D',
          path: 'three/examples/js/loaders/sea3d/SEA3D'
        }]
      }
    ]
  }
]
var animationBaseArr = [
  'CCDIKSolver',
  'MMDAnimationHelper',
  'MMDPhysics'
]
let loader = []
loaderBaseArr.forEach((v, i) => {
  loader.push({
      test: require.resolve(`three/examples/js/loaders/${v}`),
      use: "imports-loader?THREE=three"
  })
  loader.push({
    test: require.resolve(`three/examples/js/loaders/${v}`),
    use: `exports-loader?THREE.${v}`
  })
})

function recursion (arr, use, path) {
  arr.forEach((v, i) => {
    use += `,${v.name}=${v.path}`
    if (v.install && v.install.length > 0) {
      recursion(v.install, `imports-loader?THREE=three`, v.path)
    }
  })
  loader.push({
    test: require.resolve(`${path}`),
    use: use
  })
}
loaderSpecialArr.forEach((v, i) => {
  if (v.install && v.install.length > 0) {
    recursion(v.install, `imports-loader?THREE=three`, v.path)
  } else {
    loader.push({
      test: require.resolve(`${v.path}`),
      use: "imports-loader?THREE=three"
    })
  }
  loader.push({
    test: require.resolve(`${v.path}`),
    use: `exports-loader?THREE.${v.name}`
  })
})
let controls = [
  {
    test: require.resolve("three/examples/js/controls/OrbitControls"),
    use: "imports-loader?THREE=three"
  },
  {
    test: require.resolve("three/examples/js/controls/OrbitControls"),
    use: "exports-loader?THREE.OrbitControls"
  },
]
module.exports = [
  ...loader,
  ...controls
]
