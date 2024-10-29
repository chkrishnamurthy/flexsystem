import React from "react";

function Home() {
  let container = document.getElementById("container");

  let flexDirectionValue = "row";
  let justifyContentValue = "nowrap";
  let flexWrapValue = "flex-start";
  let alignItemsValue = "stretch";
  let alignContentValue = "stretch";
  let gapValue = "5px";

  //   function addBox() { container.innerHTML  += `
  //     <div class="item a">A</div>
  //     <div class="item b">B</div>
  //     <div class="item c">C</div>
  //     <div class="item d">D</div>`;
  // }

  // convert above script code in react
  const addBox = () => {
    const container = document.getElementById("container");
    if (container) {
      container.innerHTML += `
      <div class="item a">A</div>
      <div class="item b">B</div>
      <div class="item c">C</div>
      <div class="item d">D</div>`;
    }
  };

  //   function resetBox() { container.innerHTML  = `
  //     <div class="item a">A</div>
  //     <div class="item b">B</div>
  //     <div class="item c">C</div>
  //     <div class="item d">D</div>`;
  // }

  const resetBox = () => {
    const container = document.getElementById("container");
    if (container) {
      container.innerHTML = `        
      <div class="item a">A</div>
      <div class="item b">B</div>
      <div class="item c">C</div>
      <div class="item d">D</div>`;
    }
  };

  // async function copyText() {
  //   let code=`.container {
  //     display: flex;
  //     flex-direction:${flexDirectionValue};
  //     flex-wrap:${flexWrapValue};
  //     justify-content:${justifyContentValue};
  //     align-items:${alignItemsValue};
  //     align-content:${alignContentValue};
  //     gap:${gapValue};
  //   }`;
  //   let result = await navigator.clipboard.writeText(code).then(() => {
  //         alert("Code copied successfully");
  //       })
  //       .catch(() => {
  //         alert("Something went wrong!");
  //       });
  // }

  const copyText = async () => {
    let code = `.container {
      display: flex;
      flex-direction:${flexDirectionValue};
      flex-wrap:${flexWrapValue};
      justify-content:${justifyContentValue};
      align-items:${alignItemsValue};
      align-content:${alignContentValue};
      gap:${gapValue};
    }`;
    let result = await navigator.clipboard
      .writeText(code)
      .then(() => {
        alert("Code copied successfully");
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  // function justifyContent() { container.style.justifyContent = document.getElementById("justifyContent").value;
  //   justifyContentValue= document.getElementById("justifyContent").value;
  //   }

  //   function alignItems() { container.style.alignItems = document.getElementById("alignItems").value;
  //   alignItemsValue= document.getElementById("alignItems").value;
  //   }

  //   function flexDirection() { container.style.flexDirection = document.getElementById("flexDirection").value;
  //   flexDirectionValue=document.getElementById("flexDirection").value;
  //   }

  //   function alignContent() { container.style.alignContent = document.getElementById("alignContent").value;
  //   alignContentValue=document.getElementById("alignContent").value;
  //   }

  //   function flexWrap() { container.style.flexWrap = document.getElementById("flexWrap").value;
  //   flexWrapValue= document.getElementById("flexWrap").value;
  //   }

  // convert above commented code in react
  const justifyContent = () => {
    const container = document.getElementById("container");
    if (container) {
      container.style.justifyContent =
        document.getElementById("justifyContent").value;
      justifyContentValue = document.getElementById("justifyContent").value;
    }
  };

  const alignItems = () => {
    const container = document.getElementById("container");
    if (container) {
      container.style.alignItems = document.getElementById("alignItems").value;
      alignItemsValue = document.getElementById("alignItems").value;
    }
  };

  const flexDirection = () => {
    const container = document.getElementById("container");
    if (container) {
      container.style.flexDirection =
        document.getElementById("flexDirection").value;
      flexDirectionValue = document.getElementById("flexDirection").value;
    }
  };

  const alignContent = () => {
    const container = document.getElementById("container");
    if (container) {
      container.style.alignContent =
        document.getElementById("alignContent").value;
      alignContentValue = document.getElementById("alignContent").value;
    }
  };

  const flexWrap = () => {
    const container = document.getElementById("container");
    if (container) {
      container.style.flexWrap = document.getElementById("flexWrap").value;
      flexWrapValue = document.getElementById("flexWrap").value;
    }
  };

  return (
    <>
      <div className="header">
        <h1>Interactive Guide to Flexbox</h1>
      </div>

      <div className="main">
        <div className="container" id="container">
          <div className="item a">A</div>
          <div className="item b">B</div>
          <div className="item c">C</div>
          <div className="item d">D</div>
        </div>

        <div className="containerSelect">
          <div className="buttonDiv">
            <button className="button" onClick={resetBox}>
              Reset Items
            </button>
            <button className="button" onClick={addBox}>
              + Items
            </button>
          </div>
          <p className="codeTitle">style.css</p>

          <p className="p1">.container </p>

          <div className="rows">
            <label for="flexDirection">flex-direction:</label>

            <select
              name="flexDirection"
              id="flexDirection"
              onchange={flexDirection}
            >
              <option value="row">row;</option>
              <option value="row-reverse">row-reverse;</option>
              <option value="column">column;</option>
              <option value="column-reverse">column-reverse;</option>
            </select>
          </div>

          <div className="rows">
            <label for="flexWrap">flex-wrap:</label>

            <select name="flexWrap" id="flexWrap" onchange={flexWrap}>
              <option value="nowrap">nowrap;</option>
              <option value="wrap">wrap;</option>
              <option value="wrap-reverse">wrap-reverse;</option>
            </select>
          </div>

          <div className="rows">
            <label for="justifyContent">justify-content:</label>
            <select
              name="justifyContent"
              id="justifyContent"
              onchange={justifyContent}
            >
              <option value="flex-start">flex-start;</option>
              <option value="flex-end">flex-end;</option>
              <option value="center">center;</option>
              <option value="space-between">space-between;</option>
              <option value="space-around">space-around;</option>
              <option value="space-evenly">space-evenly;</option>
            </select>
          </div>

          <div className="rows">
            <label for="alignItems">align-items:</label>
            <select name="alignItems" id="alignItems" onchange={alignItems}>
              <option value="stretch">stretch;</option>
              <option value="flex-start">flex-start;</option>
              <option value="flex-end">flex-end;</option>

              <option value="center">center;</option>
              <option value="baseline">baseline;</option>
            </select>
          </div>

          <div className="rows">
            <label for="alignContent">align-content:</label>
            <select
              name="alignContent"
              id="alignContent"
              onchange={alignContent}
            >
              <option value="stretch">stretch;</option>
              <option value="flex-start">flex-start;</option>
              <option value="flex-end">flex-end;</option>
              <option value="center">center;</option>

              <option value="space-between">space-between;</option>
              <option value="space-around">space-around;</option>
              <option value="space-evenly">space-evenly;</option>
            </select>
          </div>

          <div className="rows">
            <label for="gap">gap:</label>
            <div id="gapSpan">5px</div>
            <span>;</span>
            <input
              // oninput="range()"
              className="range"
              id="gapRange"
              type="range"
              min="0"
              max="200"
              value="5"
            />
          </div>

          <p className="p1"></p>
          <button className="copyButton" onClick={copyText}>
            Copy Code
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
