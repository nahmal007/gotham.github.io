$(document).ready(function () {

    setTimeout(function () { $("#loader-fade").fadeOut("slow"); }, 300);

    $(".popmenuclose").click(function () { $(".popmenu").toggleClass("popmenuopen"); });
    $(".sidenavbtn").click(function () { $(".popmenu").toggleClass("popmenuopen"); });

    $("#LBTNBOOK").click(function () {
        window.location.href = "book.aspx?t=1&ax=" + $("#IDMainSection").attr("data-fltid");
    });
    $("#LBTNENQ").click(function () {
        var wpn = $("#CMSSocial_a a:eq(1)").attr("href")
        wpn = wpn.slice(-13);
        var wpnmsg = $("#MainMake").html() + " " + $("#MainModel").html() + "@" + $("#MainRent").html();
        var wpnmsg = "I'm interested in :  " + $("#MainMake").html() + " " + $("#MainModel").html()
            + ". Rent" + $("#MainRent").html() + ". Min Age 25. Deposit AED 10000. 300 KM/Day.";

        window.open(wpnurl, '_blank');
    }); 

    
    $(".arrw").click(function (e) {
        var InxMain = GetNxIndex(parseInt($("#IDMainSection").attr("data-index")));
        ChangeCar(InxMain);
        return false;
    });

    document.addEventListener('swiped-left', function (e) {
        var InxMain = GetNxIndex(parseInt($("#IDMainSection").attr("data-index")));
        ChangeCar(InxMain);
        return false;
    });
    document.addEventListener('swiped-right', function (e) {
        var InxMain = GetPvIndex(parseInt($("#IDMainSection").attr("data-index")));
        ChangeCar(InxMain);
        return false;
    });
    document.addEventListener('swiped-up', function (e) {
        var InxMain = GetNxIndex(parseInt($("#IDMainSection").attr("data-index")));
        ChangeCar(InxMain);
        return false;
    });
    
    $("#IDSideSection").click(function () {
        var InxMain = parseInt($("#IDSideSection").attr("data-index"));
        ChangeCar(InxMain);
    });
    $("#IDLastSection").click(function () {
        var InxMain = parseInt($("#IDLastSection").attr("data-index"));
        ChangeCar(InxMain);
    });

    ChangeCar(0);

    $(".fleetbookinglinks").hover(function () {
        $("#FleetLinkBox").css("animation","marquee 30s linear infinite");
    }, function () {
        $("#FleetLinkBox").css("animation", "");
    });

});
function GetNxIndex(indexValue) { var totalSlides = $("#DVSlides div").length - 1; indexValue++; if (indexValue > totalSlides) indexValue = 0; return indexValue;}
function GetPvIndex(indexValue) { var totalSlides = $("#DVSlides div").length - 1; indexValue--; if (indexValue < 0) indexValue = totalSlides;  return indexValue;}

function ChangeCar(carIndex) {
    var mainSlideObj = $("#DVSlides div:eq(" + carIndex + ")");
    $("#MainImg").animate({ opacity: 0, marginLeft: '100px' }, '100', 'linear', function () {
        $("#IDMainSection").css({ "background-color": $(mainSlideObj).attr("data-bg") });
        $(this).attr("src", $(mainSlideObj).attr("data-image"));
        $(this).animate({ opacity: 1, marginLeft: '0px' }, '300', 'linear');
    });

    $("#IDMainSection").attr("data-index", carIndex);
    $("#IDMainSection").attr("data-fltid", $(mainSlideObj).attr("data-prod"));
    $("#MainMake").html($(mainSlideObj).attr("data-make"));
    $("#MainModel").html($(mainSlideObj).attr("data-model"));
    if ($("#BtnAed").hasClass("achk")) {
        $("#MainRent").html("AED " + $(mainSlideObj).attr("data-rentaed"));
    }
    else {
        $("#MainRent").html("EURO " + $(mainSlideObj).attr("data-renteuro"));
    }

    if ($("#SideImg").is(":visible")) {
        var totalSlides = $("#DVSlides div").length - 1;
        var NextSlide = carIndex + 1; if (NextSlide > totalSlides) NextSlide = 0;
        var LastSlide = NextSlide + 1; if (LastSlide > totalSlides) LastSlide = 0;
        var NextSlideObj = $("#DVSlides div:eq(" + NextSlide + ")");
        var LastSlideObj = $("#DVSlides div:eq(" + LastSlide + ")");

        $("#SideImg").animate({ opacity: 0, marginLeft: '0px' }, '300', 'linear', function () {
            $("#IDSideSection").css({ "background-color": $(NextSlideObj).attr("data-bg") });
            $("#IDSideSection").attr("data-index", NextSlide);
            $(this).attr("src", $(NextSlideObj).attr("data-image"));
            $(this).animate({ opacity: 1, marginLeft: '0px' }, '300', 'linear');
        });
        $("#SideMake").html($(NextSlideObj).attr("data-make"));
        $("#SideModel").html($(NextSlideObj).attr("data-model"));
        if ($("#BtnAed").hasClass("achk")) {
            $("#SideRent").html("AED " + $(NextSlideObj).attr("data-rentaed"));
        }
        else {
            $("#SideRent").html("EURO " + $(NextSlideObj).attr("data-renteuro"));
        }
        
        $("#LastImg").animate({ opacity: 0, marginLeft: '0px' }, '300', 'linear', function () {
            $("#IDLastSection").css({ "background-color": $(LastSlideObj).attr("data-bg") });
            $("#IDLastSection").attr("data-index", LastSlide);
            $(this).attr("src", $(LastSlideObj).attr("data-image"));
            $(this).animate({ opacity: 1, marginLeft: '0px' }, '300', 'linear');
        });
        $("#LastMake").html($(LastSlideObj).attr("data-make"));
        $("#LastModel").html($(LastSlideObj).attr("data-model"));
        if ($("#BtnAed").hasClass("achk")) {
            $("#LastRent").html("AED " + $(LastSlideObj).attr("data-rentaed"));
        }
        else {
            $("#LastRent").html("EURO " + $(LastSlideObj).attr("data-renteuro"));
        }
        

    }
} 