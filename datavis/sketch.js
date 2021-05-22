// n positions for each point on the line graph
// with each time step move point to left
// every time step draw a point at n

const s = (sketch) => {

    let min_amp = 0;
    let max_amp = 100;
    let bg_col = 122;
    let canw = 400; let canh = 400;
    let lpad = canw/8; let rpad = canw/8;
    let bpad = canh/8; let tpad = canh/8;
    let n = 20;
    let step_len = 1;
    let n_coords = {};

    sketch.setup = () => {
        sketch.createCanvas(canw, canh);
        sketch.background(bg_col);
        // padding
        n_coords = sketch.init_n_points(n);
        sketch.frameRate(10);
    };

    sketch.draw_padding = () => {
        sketch.strokeWeight(0);
        sketch.fill(190);
        sketch.rect(0, 0, 0+lpad, canh);
        sketch.rect(canw-rpad, 0, canw, canh);
    };

    sketch.map_amp_to_y = (amp) => {
        let highest_y = 0 + tpad;
        let lowest_y = canh - bpad;
        let amp_ratio = amp/max_amp;
        let amp_scaled = (lowest_y - highest_y)*(1-amp_ratio) + highest_y
        return amp_scaled;
    };

    sketch.draw = () => {
        // sketch.update_coords(n, n_coords);
        sketch.background(bg_col);
        // sketch.update_coord_from_amp(0, n_coords, 50);
        sketch.add_new_point(n, sketch.random(100), n_coords);
        sketch.draw_points(n, n_coords);

        sketch.draw_padding();
    };

    sketch.add_new_point = (num_points, amp, coords) => {
        // shift em left
        for (let i = num_points-1; i > 0; i--) {
            coords[i] = [coords[i][0], coords[i-1][1]];
        }
        // add new
        sketch.update_coord_from_amp(0, coords, amp);
        // sketch.print(coords);
    };

    sketch.update_coord_from_amp = (point_num, coords, amp) => {
        let y = sketch.map_amp_to_y(amp);
        coords[point_num][1] = y;
    };

    sketch.draw_points = (n, coords) => {
        sketch.noFill();
        sketch.stroke(0);
        sketch.beginShape();
        sketch.strokeWeight(3);
        let sx = coords[n-1][0];
        let sy = coords[n-1][1];
        sketch.curveVertex(sx,sy);
        for (let i = n-1; i >= 0; i--) {
            let x = coords[i][0];
            let y = coords[i][1];
            // sketch.ellipse(x,y, 5, 5);
            sketch.curveVertex(x,y);
        }
        let ex = coords[0][0];
        let ey = coords[0][1];
        sketch.curveVertex(ex,ey);
        sketch.endShape();
    };

    sketch.init_n_points = (n) => {
        let point_yoff = canh-bpad;
        let coords = {};
        for (let i = 0; i < n; i++) {
            let x = canw-rpad - (i+1) * ((canw-lpad-rpad)/n)
            let y = point_yoff;
            coords[i] = [x,y];
        }
        sketch.print(coords[0])
        return coords;
    };
};

let myp5 = new p5(s);
