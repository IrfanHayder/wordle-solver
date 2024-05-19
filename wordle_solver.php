<?php
/**
 * Plugin Name: Wordle Solver
 * Description: Wordle Solver
 * Version: 1.0.0
 * Author: Cubixsol
 * Author URI:  https://cubixsol.com 
 * Text Domain: Wordle_Solver
 */

// Enqueue scripts and styles
// Enqueue scripts and styles



// Shortcode function
function wordle_solver_shortcode() {
    // Buffer output
    ob_start();
    ?>
    <div class="main-div">
        <h1>Wordle Word Finder</h1>
        <div class="container">
            <h2>Select Limits of Words</h2>
            <div id="buttons_div"></div>

            <div class="inputcontainer">

                
                <h3><span id="green"></span>Green (Position-correct letters:)</h3>
            
                <div id="inputFields"></div>
                <h3><span id="yellow"></span>Yellow (Position-incorrect letters:)</h3>
                <div id="yellowinput"></div>
                <h3><span id="black"></span>Black (Excluded letters:)</h3>
                <div id="blackinputs"></div>
            </div>

            <input type="button" id="solve" value="Solve">
            <input type="button" id="reset" value="Reset">
            <h2>Words found by Wordle Solver:</h2>
            <div class="output">

                <p id="enter"></p>
            </div>
            
            
        </div>

    </div>
    <?php
    // Get and clean the buffer
    $output = ob_get_clean();
    
    // Return the output
    return $output;
}

// Register shortcode
add_shortcode('wordle_solver', 'wordle_solver_shortcode');

add_action('wp_enqueue_scripts', 'wordle_solver_enqueue_scripts');
function wordle_solver_enqueue_scripts() {
    // Enqueue JavaScript files
    wp_enqueue_script('wordle-words-js', plugins_url('assets/words.js', __FILE__));
    wp_enqueue_script('wordle-solver-js', plugins_url('assets/wordle_solver.js', __FILE__), array('wordle-words-js')); // Dependency on 'wordle-words-js'
    
    // Enqueue CSS file
    wp_enqueue_style('wordle-css', plugins_url('assets/style.css', __FILE__));
}

?>
