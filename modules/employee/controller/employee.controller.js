export const getEmployee = async (req,res) => {
    try {
        // return {
        //     status: 200,
        //     message: 'hello'
        // }
        res.json('hello')
    }
    catch (err) {
        return {
            status: 500,
            error: err,
        }
    }
}
