window.onload = function () {
  const bill = document.querySelector(".bill-input");
  const numberOfPeople = document.querySelector(".p-count");
  const pError = document.querySelector(".people-in");
  const error = document.querySelector(".error-num");
  const tipType = document.querySelectorAll(".tip-btn");
  const customTip = document.querySelector(".custom-btn");
  let tipAmount = document.querySelector(".amount-tip");
  let total = document.querySelector(".amount-total");
  const reset = document.querySelector(".reset");

  let listOfbills = [];
  let listOfPepole = [];
  let selectedTips = [];
  let tipAmountList = [];
  let totalPPList = [];

  bill.addEventListener("input", function () {
    listOfbills.push(bill.value);
    if (
      listOfbills[listOfbills.length - 1] > 0 &&
      isNaN(listOfPepole[listOfPepole.length - 1])
    ) {
      error.style.display = "grid";
      pError.classList.add("error-count");
    }
    // tip

    tipResult =
      (listOfbills[listOfbills.length - 1] *
        selectedTips[selectedTips.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    tipAmountList.push(tipResult.toFixed(2));

    // total

    let totalPerP =
      ((selectedTips[selectedTips.length - 1] + 1) *
        listOfbills[listOfbills.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    totalPPList.push(totalPerP.toFixed(2));

    if (
      tipAmountList[tipAmountList.length - 1] > 0 &&
      listOfPepole[listOfPepole.length - 1] > 0
    ) {
      tipAmount.textContent = `$${tipAmountList[tipAmountList.length - 1]}`;
      total.textContent = `$${totalPPList[totalPPList.length - 1]}`;
    }
    if (
      listOfbills[listOfbills.length - 1] > 0 ||
      listOfPepole[listOfPepole.length - 1] > 0
    ) {
      if (!reset.classList.contains("reset-active")) {
        reset.classList.add("reset-active");
      }
    } else {
      reset.classList.remove("reset-active");
    }
  });

  numberOfPeople.addEventListener("input", function () {
    if (numberOfPeople.value == 0) {
      pError.classList.add("error-count");
      error.style.display = "grid";
      numberOfPeople.classList.remove("p-hover");
      total.textContent = "$0.00";
      tipAmount.textContent = "$0.00";
    } else {
      if (pError.classList.contains("error-count")) {
        pError.classList.remove("error-count");
      }
      if (!numberOfPeople.classList.contains("p-hover")) {
        numberOfPeople.classList.add("p-hover");
      }
      if ((error.style.display = "grid")) {
        error.style.display = "none";
      }

      listOfPepole.push(numberOfPeople.value);
      if (
        customTip.textContent == 0 &&
        listOfbills[listOfbills.length - 1] > 0
      ) {
        total.textContent = `$${(
          listOfbills[listOfbills.length - 1] /
          listOfPepole[listOfPepole.length - 1]
        ).toFixed(2)}`;
      }

      // tip

      let tipResult =
        (listOfbills[listOfbills.length - 1] *
          selectedTips[selectedTips.length - 1]) /
        listOfPepole[listOfPepole.length - 1];
      tipAmountList.push(tipResult.toFixed(2));

      // total

      let totalPerP =
        ((selectedTips[selectedTips.length - 1] + 1) *
          listOfbills[listOfbills.length - 1]) /
        listOfPepole[listOfPepole.length - 1];
      totalPPList.push(totalPerP.toFixed(2));

      if (
        tipAmountList[tipAmountList.length - 1] > 0 &&
        listOfPepole[listOfPepole.length - 1] > 0
      ) {
        tipAmount.textContent = `$${tipAmountList[tipAmountList.length - 1]}`;
        total.textContent = `$${totalPPList[totalPPList.length - 1]}`;
      }
    }
    listOfPepole.push(numberOfPeople.value);

    if (
      listOfPepole[listOfPepole.length - 1] ||
      listOfbills[listOfbills.length - 1] > 0
    ) {
      if (!reset.classList.contains("reset-active")) {
        reset.classList.add("reset-active");
      }
    } else {
      reset.classList.remove("reset-active");
    }
  });

  tipType.forEach(function (q) {
    q.addEventListener("click", clickedTip);
  });

  function clickedTip(e) {
    tipType.forEach(function (e) {
      e.classList.remove("cliked-tip-btn");
    });
    customTip.classList.remove("clicked-custom-btn");
    this.classList.add("cliked-tip-btn");

    tipPercent = e.target.textContent.slice(0, -1) / 100;
    selectedTips.push(tipPercent);
    // tip

    let tipResult =
      (listOfbills[listOfbills.length - 1] *
        selectedTips[selectedTips.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    tipAmountList.push(tipResult.toFixed(2));

    // total

    let totalPerP =
      ((selectedTips[selectedTips.length - 1] + 1) *
        listOfbills[listOfbills.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    totalPPList.push(totalPerP.toFixed(2));

    if (
      tipAmountList[tipAmountList.length - 1] > 0 &&
      listOfPepole[listOfPepole.length - 1] > 0
    ) {
      tipAmount.textContent = `$${tipAmountList[tipAmountList.length - 1]}`;
      total.textContent = `$${totalPPList[totalPPList.length - 1]}`;
    }
  }

  customTip.addEventListener("input", function () {
    ctmPercent = customTip.value / 100;
    selectedTips.push(ctmPercent);

    // tip

    let tipResult =
      (listOfbills[listOfbills.length - 1] *
        selectedTips[selectedTips.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    tipAmountList.push(tipResult.toFixed(2));

    // total

    let totalPerP =
      ((selectedTips[selectedTips.length - 1] + 1) *
        listOfbills[listOfbills.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    totalPPList.push(totalPerP.toFixed(2));

    if (
      tipAmountList[tipAmountList.length - 1] > 0 &&
      listOfPepole[listOfPepole.length - 1] > 0
    ) {
      tipAmount.textContent = `$${tipAmountList[tipAmountList.length - 1]}`;
      total.textContent = `$${totalPPList[totalPPList.length - 1]}`;
    } else {
      tipAmount.textContent = `$0.00`;
    }
  });
  customTip.addEventListener("click", function () {
    tipType.forEach((e) => {
      e.classList.remove("cliked-tip-btn");
    });
    this.classList.add("clicked-custom-btn");

    ctmPercent = customTip.value / 100;
    selectedTips.push(ctmPercent);
    // tip

    let tipResult =
      (listOfbills[listOfbills.length - 1] *
        selectedTips[selectedTips.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    tipAmountList.push(tipResult.toFixed(2));

    // total

    let totalPerP =
      ((selectedTips[selectedTips.length - 1] + 1) *
        listOfbills[listOfbills.length - 1]) /
      listOfPepole[listOfPepole.length - 1];
    totalPPList.push(totalPerP.toFixed(2));

    if (
      tipAmountList[tipAmountList.length - 1] > 0 &&
      listOfPepole[listOfPepole.length - 1] > 0
    ) {
      tipAmount.textContent = `$${tipAmountList[tipAmountList.length - 1]}`;
      total.textContent = `$${totalPPList[totalPPList.length - 1]}`;
    } else {
      tipAmount.textContent = `$0.00`;
      if (
        listOfPepole[listOfPepole.length - 1] > 0 &&
        listOfbills[listOfbills.length - 1] > 0
      ) {
        total.textContent = `$${(
          listOfbills[listOfbills.length - 1] /
          listOfPepole[listOfPepole.length - 1]
        ).toFixed(2)}`;
      }
    }
  });
  reset.addEventListener("click", function () {
    if (reset.classList.contains("reset-active")) {
      bill.value = "";
      numberOfPeople.value = "";
      location.reload();
    }
  });
};
