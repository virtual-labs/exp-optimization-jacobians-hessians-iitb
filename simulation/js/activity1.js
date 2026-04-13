let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600">Jacobians</h4>

        <div class="fs-16px">
        <h5>Pivoting</h5>
        <p>Learning Objective: To learn how to calculate a Jacobian matrix.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
// let mat1 = get_matrix_html(3, 1, [[1], [2], [3]], 'inline-block');
// console.log(mat1);
//html for matrix inputs
let matrix_c_inputs = get_matrix_html(2, 2, [
    [
        `<input id='a1-mata-11' class='form-control' />`,
        `<input id='a1-mata-12' class='form-control' />`,
    ],
    [
        `<input id='a1-mata-21' class='form-control' />`,
        `<input id='a1-mata-22' class='form-control' />`,
    ],
], 'inline-block', '25%');
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

		<h4>Given that </h4>
		<div style='text-align: center;'>$$ f_1 = x^{${u}}y - 2y  $$</div>
		<div style='text-align: center;'>$$ f_2 = 3x + 4y^${v}  $$</div>
        <br>

		<h5>Take derivatives to calculate the Jacobian matrix and enter the final elements of the Jacobian matrix at (x,y) = (${x},${y}).</h5>

        <h5>Perform pivoting and enter the final elements of the matrix and vetor</h5>

        <div id='piv-inp-div' style='text-align: center;'> &nbsp; ${matrix_c_inputs}</div>
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_matrix_a_c();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    calculate_jacobian();
    hide_all_steps();
    //pivot_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function calculate_jacobian() {
    let val_11 = u * (Math.pow(x, (u - 1))) * y;
    let val_12 = (Math.pow(x, u)) - 2;
    let val_21 = 3;
    let val_22 = 4 * v * Math.pow(y, (v - 1));
    jacobian_vals.push(val_11, val_12, val_21, val_22);
    console.log(val_11, val_12, val_21, val_22);
}
function verify_matrix_a_c() {
    let btn = (document.getElementById('temp-btn-12'));
    const inp_11 = document.getElementById('a1-mata-11');
    const inp_12 = document.getElementById('a1-mata-12');
    const inp_21 = document.getElementById('a1-mata-21');
    const inp_22 = document.getElementById('a1-mata-22');
    console.log(`value 11 =>`, jacobian_vals[0]);
    console.log(`value 12 =>`, jacobian_vals[1]);
    console.log(`value 21 =>`, jacobian_vals[2]);
    console.log(`value 22 =>`, jacobian_vals[3]);
    if (!verify_values(parseFloat(inp_11.value), jacobian_vals[0])) {
        alert('incorrect value in 1st row 1st column');
        return;
    }
    if (!verify_values(parseFloat(inp_11.value), jacobian_vals[0])) {
        alert('incorrect value in 1st row 2nd column');
        return;
    }
    if (!verify_values(parseFloat(inp_11.value), jacobian_vals[0])) {
        alert('incorrect value in 2nd row 1st column');
        return;
    }
    if (!verify_values(parseFloat(inp_11.value), jacobian_vals[0])) {
        alert('incorrect value in 2nd row 2nd column');
        return;
    }
    alert('You have successfully calculated Jacobian matrix');
    btn.remove();
    render_jacobian();
    activity2();
}
function render_jacobian() {
    let div = (document.getElementById('piv-inp-div'));
    div.innerHTML = `
	&nbsp; ${get_matrix_html(2, 2, [[jacobian_vals[0], jacobian_vals[1]], [jacobian_vals[2], jacobian_vals[3]]], 'inline-block', '15%')}`;
}
activity1();
//# sourceMappingURL=activity1.js.map