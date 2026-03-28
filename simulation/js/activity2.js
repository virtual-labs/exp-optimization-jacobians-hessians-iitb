function activity2() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Hessian Matrix</h5>
        <p>Learning Objective: To learn how to calculate a Hessian matrix.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
let matrix_hessian = get_matrix_html(2, 2, [
    [
        `<input id='a2-mata-11' class='form-control' />`,
        `<input id='a2-mata-12' class='form-control' />`,
    ],
    [
        `<input id='a2-mata-21' class='form-control' />`,
        `<input id='a2-mata-22' class='form-control' />`,
    ],
], 'inline-block', '25%');
function start_act2() {
    let temp_btn = (document.getElementById('temp-btn-2'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let matrix_a_inputs = get_matrix_html(3, 3, [
        [
            `<input id='a-uta-11' class='form-control' />`,
            `<input id='a1-uta-12' class='form-control' />`,
            `<input id='a1-uta-13' class='form-control' />`,
        ],
        [
            `<input id='a1-uta-21' class='form-control' />`,
            `<input id='a1-uta-22' class='form-control' />`,
            `<input id='a1-uta-23' class='form-control' />`,
        ],
        [
            `<input id='a1-uta-31' class='form-control' />`,
            `<input id='a1-uta-32' class='form-control' />`,
            `<input id='a1-uta-33' class='form-control' />`,
        ],
    ], 'inline-block', '60%');
    let matrix_c_inputs = get_matrix_html(3, 1, [
        [`<input id='a1-utc-11' class='form-control' />`],
        [`<input id='a1-utc-21' class='form-control' />`],
        [`<input id='a1-utc-31' class='form-control' />`],
    ], 'inline-block', '25%');
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb2-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        
        <h4>Given that </h4>
		<div style='text-align: center;'>$$ f_1 = x^{${u}}y - 2y  $$</div>
        <br>

		<h5>Take derivatives to calculate the Jacobian matrix and enter the final elements of the Jacobian matrix at (x,y) = (${x},${y}).</h5>

        <h5>Perform pivoting and enter the final elements of the matrix and vetor</h5>

        <div id='piv-inp-div2' style='text-align: center;'> &nbsp; ${matrix_hessian}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_hessian();'  id='temp-btn-123' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    // calculation function here
    calculate_hessian();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb2-box'), 150);
}
function calculate_hessian() {
    let val_11 = u * (u - 1) * (Math.pow(x, (u - 2))) * y;
    let val_12 = u * (Math.pow(x, (u - 1)));
    let val_21 = u * (Math.pow(x, (u - 1)));
    let val_22 = 0;
    hessian_vals.push(val_11, val_12, val_21, val_22);
    console.log(val_11, val_12, val_21, val_22);
}
function verify_hessian() {
    let btn = (document.getElementById('temp-btn-123'));
    const inp_11 = document.getElementById('a2-mata-11');
    const inp_12 = document.getElementById('a2-mata-12');
    const inp_21 = document.getElementById('a2-mata-21');
    const inp_22 = document.getElementById('a2-mata-22');
    console.log(`value 11 =>`, hessian_vals[0]);
    console.log(`value 12 =>`, hessian_vals[1]);
    console.log(`value 21 =>`, hessian_vals[2]);
    console.log(`value 22 =>`, hessian_vals[3]);
    if (!verify_values(parseFloat(inp_11.value), hessian_vals[0])) {
        alert('incorrect value in 1st row 1st column');
        return;
    }
    if (!verify_values(parseFloat(inp_11.value), hessian_vals[0])) {
        alert('incorrect value in 1st row 2nd column');
        return;
    }
    if (!verify_values(parseFloat(inp_11.value), hessian_vals[0])) {
        alert('incorrect value in 2nd row 1st column');
        return;
    }
    if (!verify_values(parseFloat(inp_11.value), hessian_vals[0])) {
        alert('incorrect value in 2nd row 2nd column');
        return;
    }
    alert('You have successfully calculated Hessian matrix');
    btn.remove();
    render_hessian();
}
function render_hessian() {
    let div = (document.getElementById('piv-inp-div2'));
    div.innerHTML = `
	&nbsp; ${get_matrix_html(2, 2, [[hessian_vals[0], hessian_vals[1]], [hessian_vals[2], hessian_vals[3]]], 'inline-block', '15%')}`;
}
//activity2();
//# sourceMappingURL=activity2.js.map