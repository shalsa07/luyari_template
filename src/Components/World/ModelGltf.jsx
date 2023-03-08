import React, { useRef } from "react";
import { Center, useGLTF } from "@react-three/drei";
import Data from "../../Data";

const {models}=Data

export default function ModelGltf({props, roofToggle, levelToggle, path}) {
  const { nodes, materials } = useGLTF(path);
  return (
    <Center>
      
      <group {...props} dispose={null}>
        <group name="Scene">
          {roofToggle && <group>
            <mesh
              name="walls_roof"
              castShadow
              receiveShadow
              geometry={nodes.walls_roof.geometry}
              material={nodes.walls_roof.material}
              scale={0.3}
            />
            <mesh
              name="textured_roof"
              castShadow
              receiveShadow
              geometry={nodes.textured_roof.geometry}
              material={nodes.textured_roof.material}
              scale={0.3}
            />
            <mesh
              name="main_Ceiling_roof"
              castShadow
              receiveShadow
              geometry={nodes.main_Ceiling_roof.geometry}
              material={nodes.main_Ceiling_roof.material}
              scale={0.3}
            />
            <mesh
              name="main_Plaster_Int_1_roof"
              castShadow
              receiveShadow
              geometry={nodes.main_Plaster_Int_1_roof.geometry}
              material={nodes.main_Plaster_Int_1_roof.material}
              scale={0.3}
            />
            <mesh
              name="main_roof"
              castShadow
              receiveShadow
              geometry={nodes.main_roof.geometry}
              material={nodes.main_roof.material}
              scale={0.3}
            />
            <mesh
              name="main_Glass003"
              castShadow
              receiveShadow
              geometry={nodes.main_Glass003.geometry}
              material={nodes.main_Glass003.material}
              scale={0.3}
            />
          </group>}

          {levelToggle && <group>
            <mesh
              name="main_Glass002"
              castShadow
              receiveShadow
              geometry={nodes.main_Glass002.geometry}
              material={nodes.main_Glass002.material}
              scale={0.3}
            />
            <mesh
              name="main_Door__Panel001"
              castShadow
              receiveShadow
              geometry={nodes.main_Door__Panel001.geometry}
              material={nodes.main_Door__Panel001.material}
              scale={0.3}
            />
            <mesh
              name="main_Ceramic003"
              castShadow
              receiveShadow
              geometry={nodes.main_Ceramic003.geometry}
              material={nodes.main_Ceramic003.material}
              scale={0.3}
            />
            <mesh
              name="Neon001"
              castShadow
              receiveShadow
              geometry={nodes.Neon001.geometry}
              material={nodes.Neon001.material}
              scale={0.3}
            />
            <mesh
              name="textured_grd"
              castShadow
              receiveShadow
              geometry={nodes.textured_grd.geometry}
              material={nodes.textured_grd.material}
              scale={0.3}
            />
            <mesh
              name="main_grd"
              castShadow
              receiveShadow
              geometry={nodes.main_grd.geometry}
              material={nodes.main_grd.material}
              scale={0.3}
            />
            <mesh
              name="walls_grd"
              castShadow
              receiveShadow
              geometry={nodes.walls_grd.geometry}
              material={nodes.walls_grd.material}
              scale={0.3}
            />
            <mesh
              name="main_Plaster_Int_1_grd"
              castShadow
              receiveShadow
              geometry={nodes.main_Plaster_Int_1_grd.geometry}
              material={nodes.main_Plaster_Int_1_grd.material}
              scale={0.3}
            />
          </group>}

          <mesh
              name="Earth001"
              castShadow
              receiveShadow
              geometry={nodes.Earth001.geometry}
              material={nodes.Earth001.material}
              scale={0.3}
            />
          <mesh
            name="site"
            castShadow
            receiveShadow
            geometry={nodes.site.geometry}
            material={nodes.site.material}
            scale={0.3}
          />
      </group>
    </group>
    </Center>
  );
}

useGLTF.preload(models.options.option1);
