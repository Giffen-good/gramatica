const db = require("../models");
const Phrase = db.dictionary;

exports.create = (req, res) => {
	if (!req.body.content) {
		res.status(400).send({ message: "COntent can not be empty!" });
		return;
	}

	const phrase = new Phrase({
		phrase: req.body.phrase,
		fluency: [],
		tags: req.body.tags
	})
	phrase
		.save(phrase)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the blog."
      });
    });
}

exports.findAll= (req, res) => {
	Phrase.find()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occured while retrieving your phrases"
			});	
		})
}
// exports.findAll = (req, res) => {
//     const content = req.query.content;
//     var condition = content ? { content: { $regex: new RegExp(content), $options: "i" } } : {};
// 
//     Blog.find(condition)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving blogs."
//         });
//       });
// 
//Applications };
