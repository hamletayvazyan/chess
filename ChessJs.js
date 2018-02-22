var first;
var second;
var idElelement;
var position;
var target;
var move;
var move2;
var a = ['#a1', '#a2', '#a3', '#a4', '#a5', '#a6', '#a7', '#a8'];
var b = ['#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7', '#b8'];
var c = ['#c1', '#c2', '#c3', '#c4', '#c5', '#c6', '#c7', '#c8'];
var d = ['#d1', '#d2', '#d3', '#d4', '#d5', '#d6', '#d7', '#d8'];
var e = ['#e1', '#e2', '#e3', '#e4', '#e5', '#e6', '#e7', '#e8'];
var f = ['#f1', '#f2', '#f3', '#f4', '#f5', '#f6', '#f7', '#f8'];
var g = ['#g1', '#g2', '#g3', '#g4', '#g5', '#g6', '#g7', '#g8'];
var h = ['#h1', '#h2', '#h3', '#h4', '#h5', '#h6', '#h7', '#h8'];
var latter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var latter2 = [a, b, c, d, e, f, g, h];
var freeMove = [];
var uno = ['#a1', '#b1', '#c1', '#d1', '#e1', '#f1', '#g1', '#h1'];
var due = ['#b2', '#b2', '#c2', '#d2', '#e2', '#f2', '#g2', '#h2'];
var tre = ['#a3', '#b3', '#c3', '#d3', '#e3', '#f3', '#g3', '#h3'];
var quattro = ['#a4', '#b4', '#c4', '#d4', '#e4', '#f4', '#g4', '#h4'];
var cinque = ['#a5', '#b5', '#c5', '#d5', '#e5', '#f5', '#g5', '#h5'];
var sei = ['#a6', '#b6', '#c6', '#d6', '#e6', '#f6', '#g6', '#h6'];
var sette = ['#a7', '#b7', '#c7', '#d7', '#e7', '#f7', '#g7', '#h7'];
var otto = ['#a8', '#b8', '#c8', '#d8', '#e8', '#f8', '#g8', '#h8'];
var number = ['1', '2', '3', '4', '5', '6', '7', '8'];
var number2 = [uno, due, tre, quattro, cinque, sei, sette, otto];
var freeMove1 = [];
var zinvor;

$('.black, .white').click(function () {

    berd();
    pawn1();
    rdc()

});
$(".wRookH, .bRookH").on("click", function (event) {

    berd1();
    oki();

});
$(".asd").on('click', function (event) {
    pawn()
});
function berd1() {
    var idOfElelment = event.target.parentNode.id;
    var result = idOfElelment.split('');
    target = result[0];
    position = result[1];
    var asd = [];
    first = event.target;
    for (var i = 0; i < a.length; i++) {
        if (latter[i] == target) {
            asd = latter2[i];
        }
        if ($(asd[i]).children().length == 0) {
            freeMove[i] = asd[i];
        }
    }
    for (var k = 0; k < h.length; k++) {
        if (latter[k] == target) {
            asd = latter2[k];

        }
        if ($(asd[k]).children().length == 0) {
            freeMove[k] = asd[k];
        }
    }
}
function berd() {
    for (var j = 0; j < freeMove.length; j++) {

        if ($(freeMove[j]).children().length == 0) {
            if ("#" + event.target.id == freeMove[j]) {
                $('#' + event.target.id).html(first);
                first = "";
                freeMove = []
            }
        }
    }
}
function pawn() {
zinvor = event.target;
    if ($(zinvor).attr('class') == 'whiteBp asd' || $(zinvor).attr('class') == 'blackBp asd') {
       idElelement = event.target.parentNode.id;
        var Zsplit = idElelement.split('');
        position = Zsplit[0];
        target = Zsplit[1]
    }
}
function pawn1() {
    if ($(zinvor).attr("id")) {
        if ($(zinvor).attr('class') == 'whiteBp asd') {
            move = parseInt(target) + 1;
            move2 = parseInt(target) + 2;
            if (event.target.id == position + move) {
                $('#' + position + move).html(zinvor);
                zinvor = '';
                move = "";
            } else if (event.target.id == position + move2 && target == 2) {
                $('#' + position + move2).html(zinvor);
                zinvor = '';
                move = "";
            }
        } else if ($(zinvor).attr('class') == 'blackBp asd') {
            move = parseInt(target) - 1;
            move2 = parseInt(target) - 2;
            if (event.target.id == position + move) {
                $('#' + position + move).html(zinvor);
                zinvor = '';
                move = "";
            } else if (event.target.id == position + move2 && target == 7) {
                $('#' + position + move2).html(zinvor);
                zinvor = '';
                move = "";
            }
        }

    } else {

    }
}
function oki() {
    var idOfElelmen = event.target.parentNode.id;
    var result = idOfElelmen.split('');
    target = result[0];
    position = result[1];
    var asd = [];
    second = event.target;
    for (var m = 0; m < cinque.length; m++) {

        if (number[m] == position) {
            asd = number2[m];

        }

        if ($(asd[m]).children().length == 0) {
            freeMove1[m] = asd[m];
        }
    }
    for (var n = 0; n < quattro.length; n++) {

        if (number[n] == position) {
            asd = number2[n];

        }

        if ($(asd[n]).children().length == 0) {
            freeMove1[n] = asd[n];
        }
    }

}
function rdc() {
    for (var o = 0; o < freeMove1.length; o++) {

        if ($(freeMove1[o]).children().length == 0) {
            if ("#" + event.target.id == freeMove1[o]) {
                $('#' + event.target.id).html(second);
                second = "";
                freeMove1 = []
            }
        }
    }
}
