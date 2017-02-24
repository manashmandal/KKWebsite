d3.select(window).on('resize', resize);


function resize() {
    d3.select('#chart').remove();

    d3.select('#viz').append('svg').attr('id', 'chart');

    console.log("Resizing");

    console.log(window.innerHeight);
    console.log(window.innerWidth);


    var data = [
        ['ajkerdeal.com', 'Best Prices', 7, 7],
        ['ajkerdeal.com', 'Not Available in local Store', 6, 6],
        ['ajkerdeal.com', 'Product Reviews are available', 5, 5],
        ['alibaba.com', 'Best Prices', 2, 2],
        ['alibaba.com', 'Not Available in local Store', 1, 1],
        ['Amazon/ebay', 'Best Prices', 6, 6],
        ['Amazon/ebay', 'Not Available in local Store', 11, 11],
        ['Amazon/ebay', 'Product Reviews are available', 6, 6],
        ['Bikroy.com', 'Best Prices', 27, 27],
        ['Bikroy.com', 'Not Available in local Store', 15, 15],
        ['Bikroy.com', 'Product Reviews are available', 16, 16],
        ['chaldal.com', 'Best Prices', 2, 2],
        ['chaldal.com', 'Not Available in local Store', 2, 2],
        ['chaldal.com', 'Product Reviews are available', 1, 1],
        ['Clickbd.com', 'Best Prices', 0, 0],
        ['Clickbd.com', 'Not Available in local Store', 1, 1],
        ['Clickbd.com', 'Product Reviews are available', 1, 1],
        ['daraz.com.bd', 'Best Prices', 7, 7],
        ['daraz.com.bd', 'Not Available in local Store', 5, 5],
        ['daraz.com.bd', 'Product Reviews are available', 10, 10],
        ['ekhanei.com', 'Best Prices', 6, 6],
        ['ekhanei.com', 'Not Available in local Store', 11, 11],
        ['ekhanei.com', 'Product Reviews are available', 5, 5],
        ['Facebook Page', 'Best Prices', 28, 28],
        ['Facebook Page', 'Not Available in local Store', 38, 38],
        ['Facebook Page', 'Product Reviews are available', 34, 34],
        ['kayamu.com.bd', 'Best Prices', 8, 8],
        ['kayamu.com.bd', 'Not Available in local Store', 12, 12],
        ['kayamu.com.bd', 'Product Reviews are available', 18, 18],
        ['olx.com.bd', 'Best Prices', 2, 2],
        ['olx.com.bd', 'Not Available in local Store', 1, 1],
        ['olx.com.bd', 'Product Reviews are available', 2, 2],
        ['shohoz.com', 'Best Prices', 5, 5],
        ['shohoz.com', 'Not Available in local Store', 6, 6],
        ['shohoz.com', 'Product Reviews are available', 8, 8],
    ];
    var color = {
        'ajkerdeal.com': "#DC3912",
        'shohoz.com': "#ff6f00",
        'olx.com.bd': "#3e2723",
        'kayamu.com.bd': "#e53935",
        'Facebook Page': "#1a237e",
        'ekhanei.com': "#66bb6a",
        'daraz.com.bd': "#6a1b9a",
        'Clickbd.com': "#880e4f",
        'chaldal.com': "#ffc107",
        'Bikroy.com': "#00b8d4",
        'Amazon/ebay': "#ff6f00",
        'alibaba.com': "#ff7043",
        'alibaba.com': "#18ffff"
    };

    var margin = {
        top: 30,
        right: 30,
        bottom: 10,
        left: 30
    };

    //var width = +d3.select('#chart').attr('' + window.innerWidth);

    // var width = window.innerWidth - margin.left - margin.right;

    //var width = $("div.span4").width() - margin.left - margin.right;

    // var width = 960;
    var width = Math.round(window.innerWidth);
    var height = Math.round(window.innerHeight / 2.5);

    console.log("WIDTH " + width);
    // var width = +d3.select('#chart').attr('width');

    var svg = d3.select("svg").attr("width", width).attr("height", height);
    var g = svg.append("g").attr("transform", "translate(200,50)");
    var bp = viz.bP()
        .data(data)
        .min(12)
        .pad(1)
        .height(height - margin.top * 2 - margin.bottom * 2)
        .width(Math.round(width * .2))
        .barSize(30)
        .fill(d => color[d.primary]);
    g.call(bp);
    g.selectAll(".mainBars")
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
    g.selectAll(".mainBars").append("text").attr("class", "label")
        .attr("x", d => (d.part == "primary" ? -15 : 30))
        .attr("x", d => (d.part == "primary" ? -15 : 30))
        .attr("y", d => +6)
        .text(d => d.key)
        .attr("text-anchor", d => (d.part == "primary" ? "end" : "start"));
    g.selectAll(".mainBars")
    append("text").attr("class", "perc")
        .attr("x", d => (d.part == "primary" ? -100 : 250))
        .attr("x", function(d, i) {
            console.log(d.key);
            if (d.part == "primary") return -100;
            else {
                var offset = d.key.length;
                return 50 + 6 * offset;
            }
        })
        .attr("y", d => +6)
        .text(function(d) {
            return d3.format("0.0%")(d.percent)
        })
        .attr("text-anchor", d => (d.part == "primary" ? "end" : "start"));

    function mouseover(d) {
        bp.mouseover(d);
        g.selectAll(".mainBars")
            .select(".perc")
            .text(function(d) {
                return d3.format("0.0%")(d.percent)
            })
    }

    function mouseout(d) {
        bp.mouseout(d);
        g.selectAll(".mainBars")
            .select(".perc")
            .text(function(d) {
                return d3.format("0.0%")(d.percent)
            })
    }
    // d3.select(self.frameElement).style("height", "800px");

}

resize();