<template>
  <section class="h-100 mb-0 widget">
    SPENDINGS
    <div>
      <div class="widgetBody widget-body" ref="spendingsChart" :style="{ height: '150px' }" />
    </div>
  </section>
</template>

<script>
import $ from "jquery";
/* eslint-disable */
import "imports-loader?jQuery=jquery,this=>window!webpack-raphael/raphael";
import "imports-loader?jQuery=jquery,this=>window!govpredict-morris/morris";
/* eslint-enable */
import axios from "axios";
import moment from "moment";
import { mapState } from "vuex";
const { Morris } = window;

const mformat = "YYYY-MM";

export default {
  name: "SpendingsChart",
  data() {
    return {
      timer: null,
      data: [],
      colors: []
    };
  },
  methods: {
    processData(spendings) {
      this.data = [];
      this.colors = [];

      if (!spendings || this.data.length > 0) {
        return this.data;
      }

      const current = moment().month();

      for (let i = 0; i < spendings.length; i++) {
        const actual = moment(
          spendings[i].month.substring(0, 7),
          mformat
        ).month();

        if (actual === current) {
          this.data.push({
            label: spendings[i].category,
            value: spendings[i].totalSpent
          });
          this.colors.push(this.categoryConfig[spendings[i].category].color);
        }
      }
    },
    createChart() {
      if (!this.$refs.spendingsChart) {
        return;
      }
      if (this.currentSpendings.length == 0) {
        return (this.$refs.spendingsChart.innerText = "No data found");
      } else {
        this.processData(this.currentSpendings);
      }

      $(this.$refs.spendingsChart).html("");
      Morris.Donut({
        element: this.$refs.spendingsChart,
        resize: true,
        data: this.data,
        colors: this.colors
      });
    }
  },

  computed: {
    ...mapState("analytics", ["currentSpendings", "categoryConfig"])
  },
  watch: {
    currentSpendings(newValue) {
      this.createChart();
    }
  }
};
</script>
