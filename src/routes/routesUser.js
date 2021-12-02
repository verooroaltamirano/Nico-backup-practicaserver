import * as controllerUser from '../controllers/controllerUser.js'

const routesUser = app => {
    app.get('/usuario',controllerUser.viewUser)
    app.post('/usuario',controllerUser.createPost)
    app.delete('/usuario',controllerUser.delPost)
    app.put('/usuario',controllerUser.updatePost)
}
export default routesUser