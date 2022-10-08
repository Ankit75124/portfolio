export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string",
    },
    {
      name:"progress",
      title: "Progres",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule)=> Rule.min(0).max(180),
    },
    {
      name: "image",
      title:"Image",
      type: "image",
      options:{
      hotspot: true,
},
    },
    

  ],
};
