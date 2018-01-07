exports = module.exports = function (io) {
    // Set socket.io listeners.
    io.on('connection', (socket) => {
        //console.log('a user connected');
        socket.on('toi-dang-nhap-tin-nhan', (data) => {
            console.log('nahp tn '+data);
            io.to(data).emit('ai-do-dang-nhap-tin-nhan', data);
            // io.emit('ai-do-dang-nhap-tin-nhan', data);
        });
        socket.on('toi-khong-nhap-tin-nhan', (data) => {
            console.log(data);
            io.to(data).emit('ai-do-khong-nhap-tin-nhan', data);
            // io.emit('ai-do-khong-nhap-tin-nhan', data);
        });
        socket.on('toi-gui-tin-nhan', (data) => {
            console.log(JSON.stringify(data.conversationId));
            io.to(data.conversationId).emit('tin-nhan-moi', data);
            // io.emit('tin-nhan-moi', data);
        });
        socket.on('toi-xoa-tin-nhan', (data) => {
            io.to(data.conversationId).emit('xoa-tin-nhan', data);
        });
        socket.on('toi-dang-truc-tuyen', (data)=>{
            arr.push(data);
            io.emit('them-nguoi-truc-tuyen', data);
        });
        
        // On conversation entry, join broadcast channel
        socket.on('enter conversation', (conversation) => {
            socket.join(conversation);
            // console.log('joined ' + conversation);
        });

        socket.on('leave-room', (conversation) => {
            socket.leave(conversation);
            // console.log('left ' + conversation);
        })

        socket.on('new message', (conversation) => {
            io.sockets.in(conversation._id).emit('refresh messages', conversation);
        });

        // COMMON
        socket.on('disconnect', function () {
            console.log('User disconnected');
        });
        socket.on('join-room', (data) => {
            socket.join(data);
            console.log('join-room: ' + data);
        });
        // END COMMON

        // APPLY
        socket.on('apply', function (data) {
            console.log(data);
            io.to(data.room).emit('apply-message', data);
        });
        socket.on('remove-apply', function (data) {
            console.log(data);
            io.to(data.room).emit('remove-apply-message', data);
        });
        // END APPLY

        // COMMENT
        socket.on('add-comment', function (data) {
            console.log('room ' + data.room);
            io.to(data.room).emit('comment-message', data);
        });
        socket.on('add-reply', function (data) {
            console.log(data);
            io.to(data.room).emit('reply-message', data);
        });
        // END COMMENT
    });
}