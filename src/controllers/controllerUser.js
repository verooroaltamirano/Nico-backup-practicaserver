let posts = [ ]



export const viewUser= async (req,res)=>{
  
    res.status(200).render('usuario',{posteos:posts})
  }
  
export const createPost = async (req,res)=>{
  req.body.id = Math.floor(Math.random()*500000)
  posts.push(req.body)
  console.log(req.body)
  res.status(200).redirect('/usuario')
}

export const delPost =(req,res) =>{
  console.log(req.body)
  posts = posts.filter(element => element.id != req.body.id)
  res.status(200).redirect('/usuario')
  
}

export const updatePost = (req,res) => {
  let post = posts.find(element => element.id == req.body.id)
  if(req.body.title) post.title = req.body.title
  if(req.body.desc) post.desc = req.body.desc
  res.status(200).redirect('/usuario')
}