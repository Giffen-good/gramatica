module.exports = mongoose => {
    const Dictionary = mongoose.model(
      "dictionary",
      mongoose.Schema(
        {
          phrase: Object,
         	tags: Array,
					fluency: Array
        },
        { timestamps: true }
      )
    );

    // We can add a category to categorize articles

    // Incase you want to replace _.id with id 
    // schema.method("toJSON", function() {
    //   const { __v, _id, ...object } = this.toObject();
    //   object.id = _id;
    //   return object;
    // });

    // const Blog = mongoose.model("blog", schema);

    return Dictionary;
  };
