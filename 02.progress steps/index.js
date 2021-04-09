/**
 *
 * @param {Array<HTMLElement>} steps
 * @param {HTMLButtonElement} nextButon
 * @param {HTMLButtonElement} prevButton
 */
function createProgressHandlers(steps, nextButon, prevButton) {
  // const steps = Array.from(stepsContainer.querySelectorAll('.step'));
  let currentStepIndx = steps.reduce(
    (indx, step, idx) => (step.classList.contains("done") ? idx : indx),
    0
  );

  /**
   *
   * @param {MouseEvent} e
   * @returns
   */
  function prevBtnHandler(e) {
    if (currentStepIndx === 0) return;
    steps[currentStepIndx].classList.remove("done");
    currentStepIndx -= 1;
    e.target.disabled = currentStepIndx === 0;
    nextButon.disabled = currentStepIndx === steps.length - 1;
  }
  /**
   *
   * @param {MouseEvent} e
   * @returns
   */
  function nextBtnHandler(e) {
    if (currentStepIndx === steps.length - 1) return;
    steps[currentStepIndx + 1].classList.add("done");
    currentStepIndx += 1;
    e.target.disabled = currentStepIndx === steps.length - 1;
    prevButton.disabled = currentStepIndx === 0;
  }

  return {
    prevBtnHandler,
    nextBtnHandler,
  };
}

const steps = Array.from(document.querySelectorAll(".steps-container .step"));

/**
 * HTMLButton
 */
const nextButton = document.getElementById("next-button");
/**
 * HTMLButton
 */
const prevButton = document.getElementById("prev-button");
const { prevBtnHandler, nextBtnHandler } = createProgressHandlers(steps, nextButton
  ,prevButton);

nextButton.addEventListener("click", nextBtnHandler);

prevButton.addEventListener("click", prevBtnHandler);
