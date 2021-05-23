// n positions for each point on the line graph
// with each time step move point to left
// every time step draw a point at n

const s = (sketch) => {

    let min_amp = 0;
    let max_amp = 100;
    let bg_col = [255,255,255];
    let alpha_color = [255,0,0];
    let beta_color = [0,255,0];
    let theta_color = [0,0,255];
    let gamma_color = [122,122,0];
    let line_width = 3;
    let canw = 800; let canh = 400;
    let lrcol = [255,255,255];
    let btcol = [255,255,255];
    let lpad = canw/8; let rpad = canw/8;
    let bpad = canh/8; let tpad = canh/8;
    let n = 20;
    let step_len = 1;
    let alpha_coords = {};

    sketch.setup = () => {
        sketch.createCanvas(canw, canh);
        bg_col = sketch.color(bg_col[0], bg_col[1], bg_col[2]);
        sketch.background(bg_col);

        // padding
        lrcol = sketch.color(lrcol[0],lrcol[1],lrcol[2]);
        btcol = sketch.color(btcol[0],btcol[1],btcol[2]);
        
        alpha_coords = sketch.init_line(n);
        gamma_coords = sketch.init_line(n);
        beta_coords = sketch.init_line(n);
        theta_coords = sketch.init_line(n);

        alpha_color = sketch.color(alpha_color[0],alpha_color[1],alpha_color[2]);
        beta_color = sketch.color(beta_color[0],beta_color[1],beta_color[2]);
        theta_color = sketch.color(theta_color[0],theta_color[1],theta_color[2]);
        gamma_color = sketch.color(gamma_color[0],gamma_color[1],gamma_color[2]);
        sketch.frameRate(10);
    };

    sketch.draw_axis = () => {
        let axis_w = 10;
        sketch.stroke(0);
        sketch.fill(0);
        sketch.strokeWeight(1);
        sketch.fill(0);
        sketch.line(lpad, tpad-30, lpad, canh-bpad);
        // line
        let line_length = 10;
        sketch.line(lpad-10,tpad,lpad,tpad);
        sketch.line(lpad-10,canh-bpad,lpad,canh-bpad);
        sketch.textSize(10);
        sketch.fill(0);
        sketch.text("100", lpad-35, tpad+4);

        sketch.fill(0);
        sketch.strokeWeight(1);
        sketch.fill(0);
        sketch.line(0+rpad, canh-bpad, canw-lpad, canh-bpad);
        sketch.text("0", lpad-20, canh-tpad+4);


    };

    sketch.draw_padding = () => {
        let text_size = 20;
        let rotation = -90;
        // left right padding
        sketch.strokeWeight(0);
        sketch.fill(lrcol);
        sketch.rect(0, 0, 0+lpad, canh);
        sketch.rect(canw-rpad, 0, canw, canh);
        sketch.fill(0);

        // top bottom padding
        yoff = 0;
        sketch.strokeWeight(0);
        sketch.fill(btcol);
        sketch.rect(0, 0, canw, tpad-yoff);
        sketch.rect(0, canh-bpad+yoff, canw, canh);
        sketch.textSize(text_size);
        sketch.fill(0);
        sketch.text("Time", canw/2 - 20, canh - tpad/2 + text_size);

        sketch.push();
        sketch.rotate(sketch.radians(270));
        sketch.translate(-260,50); // adjust position here
        sketch.text("add here (ms)", 0,0);
        sketch.pop();
    };

    sketch.map_amp_to_y = (amp) => {
        let highest_y = 0 + tpad;
        let lowest_y = canh - bpad;
        let amp_ratio = amp/max_amp;
        let amp_scaled = (lowest_y - highest_y)*(1-amp_ratio) + highest_y
        return amp_scaled;
    };

    sketch.draw = () => {
        sketch.background(bg_col);

        // add points new points here
        sketch.add_new_point_to_line(n, sketch.random(100), alpha_coords);
        sketch.add_new_point_to_line(n, sketch.random(100), beta_coords);
        sketch.add_new_point_to_line(n, sketch.random(100), theta_coords);
        sketch.add_new_point_to_line(n, sketch.random(100), gamma_coords);

        sketch.draw_lines();
        sketch.draw_padding();
        sketch.draw_axis();
    };

    sketch.draw_lines = () => {
        sketch.draw_points(n, alpha_coords, alpha_color);
        sketch.draw_points(n, beta_coords, beta_color);
        sketch.draw_points(n, theta_coords, theta_color);
        sketch.draw_points(n, gamma_coords, gamma_color);
    };

    sketch.add_new_point_to_line = (num_points, amp, coords) => {
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

    sketch.draw_points = (n, coords, color) => {
        sketch.noFill();
        sketch.stroke(0);
        sketch.stroke(color, 122);
        sketch.beginShape();
        sketch.strokeWeight(line_width);
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

    sketch.init_line = (n) => {
        let point_yoff = canh-bpad;
        let coords = {};
        for (let i = 0; i < n; i++) {
            let x = canw-rpad - (i+1) * ((canw-lpad-rpad)/n)
            let y = point_yoff;
            coords[i] = [x,y];
        }
        return coords;
    };
};

let myp5 = new p5(s);
