Template.totoro.events ({
    'click [name=submit]': function (element, tmpl) {
        var title = $('[name=title]').val();
        var num = $('[name=num]').val();
        var count = $('[name=count]').val();
        var content = $('[name=content]').val();

        var obj = {
            '제목': title,
            '글번호': num,
            '조회수': count,
            '내용': content
        }

        //입력이면
        if($('[name=hidden_id]').val().length <=0){
            console.log(obj)
            CollectionBoard.insert(obj);
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
        } else {
            //2. 수정이라면
            CollectionBoard.update($('[name=hidden_id]').val(), {$set:obj});
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');

        }
    },
    'click [name=deleteBoard]': function (element, tmpl) {
        var id = $(element.target).attr('id');
        CollectionBoard.remove({_id: id})
        //  console.log($(element.target).attr('id'));
        //  console.log('삭제 버튼이 눌렸습니다.');
    },
    'click [name=updateBoard]': function (e, tmpl){
        console.log(' 수정 버튼이 눌렸습니다.');
        $('#modal-div').modal('show');
        // console.log(this._id);
        // console.log(this._제목);
        // console.log(this._글번호);
        // console.log(this._조회수);
        // console.log(this._내용);
        $('[name=hidden_id]').val(this.제목);
        $('[name=title]').val(this.글번호);
        $('[name=title]').val(this.조회수);
        $('[name=title]').val(this.내용);
    }
});

Template.totoro.helpers({
    list: function () {
        var result = CollectionBoard.find().fetch();
        console.log(result)
        return result;
    }
});