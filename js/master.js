function toggleHref(divid)
{
    console.log("switched: ", divid);
    if($(divid).attr('href').includes("end"))
    {
        $(divid).attr('href', $(divid).attr('href').substring(0, $(divid).attr('href').length-3))
    }
    else

    {
        $(divid).attr('href', $(divid).attr('href') + "end")
    }
}