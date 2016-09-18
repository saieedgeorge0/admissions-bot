$(document).ready(function(){
    var majorstring = "";
        $('tr').each(function(i, obj) {
            majorstring += "{ <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
            $(this).find('td').each (function(i, obj) {
                if (i==0) {
                    $(obj).find('a').each (function(z, obje) {
                        majorstring += "\"name\": \"" + $(obje).html() +"\"";
                        majorstring += ", <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                        majorstring += "\"link\": \"" + $(obje).attr("href") + "\"";
                    });
                    majorstring += ", <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                }
                else if (i==1) {
                    majorstring += "\"course\": \"" + $(this).html() + "\"";
                    majorstring += ", <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                }
                else if(i==2) {
                    if ($(this).html().indexOf("&nbsp;") >= 0) {
                        majorstring += "\"ismajor\": \"0\"" + ", <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                    }
                    if ($(this).html().indexOf("Major departure") >= 0) {
                        majorstring += "\"ismajor\": \"1\"" + ", <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                    }
                    if ($(this).html().indexOf("Yes") >= 0) {
                        majorstring += "\"ismajor\": \"1\"" + ", <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                    }
                    
                }
                else if(i==3) {
                    if ($(this).html().indexOf("&nbsp;") >= 0) {
                        majorstring += "\"isminor\": \"0\"" + ", <br>";
                    }
                    if ($(this).html().indexOf("Yes") >= 0) {
                        majorstring += "\"isminor\": \"1\"" + ", <br>";
                    }
                }
                else if (i==4) {
                    $(obj).find('a').each (function(y, object) {
                        majorstring += "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
                        majorstring += "\"pdf-link\": \"" + $(object).attr("href") + "\"";
                        majorstring += ", <br>";
                    });
                    
                }
                
            });   
            if ($(this).html().indexOf("pdf") < 0) {
                    majorstring += " &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\"pdf-link\": \"null\" <br>";
            }
            majorstring += "}, <br>";
        });
        $('.majors').html(majorstring);
});