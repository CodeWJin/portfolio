(function () {
  $(document).ready(function () {
    var walkthrough;
    walkthrough = {
      index: 0,
      nextScreen: function () {
        if (this.index < this.indexMax()) {
          this.index++;
        } else {
          this.index = 0;
        }
        return this.updateScreen();
      },
      prevScreen: function () {
        if (this.index == 0) {
          this.index = this.indexMax();
        } else {
          this.index--;
        }
        return this.updateScreen();
      },
      updateScreen: function () {
        this.reset();
        this.goTo(this.index);
        return this.setBtns();
      },
      setBtns: function () {
        var $lastBtn, $nextBtn, $prevBtn;
        $nextBtn = $(".next-screen");
        $prevBtn = $(".prev-screen");
        $lastBtn = $(".finish");

        $nextBtn.prop("disabled", false);
        $prevBtn.prop("disabled", false);
        return $lastBtn.removeClass("active").prop("disabled", true);
      },
      goTo: function (index) {
        $(".screen").eq(index).addClass("active");
        return $(".dot").eq(index).addClass("active");
      },
      reset: function () {
        return $(".screen, .dot").removeClass("active");
      },
      indexMax: function () {
        return $(".screen").length - 1;
      },
      // openModal: function () {
      //   $(".walkthrough").addClass("show");
      //   setTimeout(() => {
      //     return $(".walkthrough").addClass("reveal");
      //   }, 200);
      //   return this.updateScreen();
      // },
    };
    $(".next-screen").click(function () {
      return walkthrough.nextScreen();
    });
    $(".prev-screen").click(function () {
      return walkthrough.prevScreen();
    });
    // $(".open-walkthrough").click(function () {
    //   return walkthrough.openModal();
    // });
    // walkthrough.openModal();

    // Optionally use arrow keys to navigate walkthrough
    return $(document).keydown(function (e) {
      if (e.which == 37) {
        walkthrough.prevScreen();
      } else if (e.which == 39) {
        walkthrough.nextScreen();
      } else {
        console.log("another Key");
      }
      e.preventDefault();
    });
  });
}.call(this));
