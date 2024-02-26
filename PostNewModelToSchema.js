app.post('/newModel', (req, res) => {
    const { modelName, modelSchema } = req.body;

    const Schema = mongoose.Schema;
    const newSchema = new Schema(modelSchema, { timestamps: true });

    let Model;
    try {
        Model = mongoose.model(modelName);
    } catch (error) {
        Model = mongoose.model(modelName, newSchema);
    }

    res.send(`Model ${modelName} created successfully.`);
});