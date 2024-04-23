#!/usr/bin/env python

bl_info = {
    "name": "Chinese Traditional Colors",
    "author": "Your Name Here",
    "version": (1, 0),
    "blender": (2, 80, 0),
    "location": "View3D > Add > Mesh > Chinese Traditional Colors",
    "description": "Adds a new Mesh Object",
    "warning": "",
    "doc_url": "",
    "category": "Add Mesh",
}


import typing
import bpy
from bpy.types import Context, Material, Operator
from bpy.props import FloatVectorProperty
from bpy_extras.object_utils import AddObjectHelper, object_data_add
from mathutils import Vector


# def add_object(self, context):
#     scale_x = self.scale.x
#     scale_y = self.scale.y

#     verts = [
#         Vector((-1 * scale_x, 1 * scale_y, 0)),
#         Vector((1 * scale_x, 1 * scale_y, 0)),
#         Vector((1 * scale_x, -1 * scale_y, 0)),
#         Vector((-1 * scale_x, -1 * scale_y, 0)),
#     ]

#     edges = []
#     faces = [[0, 1, 2, 3]]

#     mesh = bpy.data.meshes.new(name="New Object Mesh")
#     mesh.from_pydata(verts, edges, faces)
#     # useful for development when the mesh may be invalid.
#     # mesh.validate(verbose=True)
#     object_data_add(context, mesh, operator=self)


# class OBJECT_OT_add_object(Operator, AddObjectHelper):
#     """Create a new Mesh Object"""
#     bl_idname = "mesh.add_object"
#     bl_label = "Add Mesh Object"
#     bl_options = {'REGISTER', 'UNDO'}

#     scale: FloatVectorProperty(
#         name="scale",
#         default=(1.0, 1.0, 1.0),
#         subtype='TRANSLATION',
#         description="scaling",
#     )

#     def execute(self, context):

#         add_object(self, context)

#         return {'FINISHED'}


class OBJECT_OT_add_colors(Operator, AddObjectHelper):
    """Create a color table"""
    bl_idname = "mesh.add_object"
    bl_label = "Add Chinese Traditional Colors Table"

    def execute(self, context: Context) -> typing.Union[typing.Set[str], typing.Set[int]]:

        bpy.ops.object.text_add(enter_editmode=False, 
                align='WORLD', location=(0, 0, 0), scale=(1, 1, 1))
        bpy.ops.material.new()
        mats = list(bpy.data.materials)
        mat: Material = [it for it in mats if it.name.startswith('Material')][-1]
        bpy.context.object.data.materials.append(mat)
        BSDF = mat.node_tree.nodes.get("Principled BSDF")
        BSDF.inputs[0].default_value = (0, 1, 1, 1)  # Base Color
        BSDF.inputs[1].default_value = 1  # Metallic
        BSDF.inputs[26].default_value = (0, 1, 1, 1)  # Emission color
        BSDF.inputs[27].default_value = 0.0  # Emission strength

        unregister()
        return {'FINISHED'}


# Registration

def add_ui_button(self, context):
    self.layout.opeerator(
        OBJECT_OT_add_colors.bl_idname,
        text="Chinese Traditional Colors",
        icon='PLUGIN')


# This allows you to right click on a button and link to documentation
def add_object_manual_map():
    url_manual_prefix = "https://docs.blender.org/manual/en/latest/"
    url_manual_mapping = (
        ("bpy.ops.mesh.add_object", "scene_layout/object/types.html"),
    )
    return url_manual_prefix, url_manual_mapping


def register():
    bpy.utils.register_class(OBJECT_OT_add_colors)
    bpy.utils.register_manual_map(add_object_manual_map)
    bpy.types.VIEW3D_MT_mesh_add.append(add_ui_button)


def unregister():
    bpy.utils.unregister_class(OBJECT_OT_add_colors)
    bpy.utils.unregister_manual_map(add_object_manual_map)
    bpy.types.VIEW3D_MT_mesh_add.remove(add_ui_button)


if __name__ == "__main__":
    register()
