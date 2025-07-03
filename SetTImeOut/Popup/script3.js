const invite=$("#Invite")
const closeBtn=$("#closebtn")

invite.hide()

setTimeout(() => {
    invite.show()
}, 5000);

closeBtn.on('click',()=>{
    invite.hide()
})



