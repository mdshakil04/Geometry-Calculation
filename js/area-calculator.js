function calculateTriangleArea(){
        const baseField = document.getElementById('triangle-base');
        const baseValueText = baseField.value;
        const base = parseFloat(baseValueText)

        const heightField = document.getElementById('triangle-height');
        const heightValueText = heightField.value;
        const height = parseFloat(heightValueText);

        const area = 0.5 * base * height;
        const areaSpan = document.getElementById('triangle-area');
        areaSpan.innerText = area;
}
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    // console.log(widthField)
    const widthValueText = widthField.value;
    // console.log(widthValueText)
    const width = parseFloat(widthValueText);
    // console.log(width)
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length)
    const area = width * length;
    // console.log(area)
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}
// Reusable Function ---- Reduce Duplicate Function
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    setAreaElementText('parallelogram-area', area);

}
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value
    const value = parseFloat(inputValueText);
    return value;
}
function setAreaElementText(elementId, area){
    const areaElement = document.getElementById(elementId)
    areaElement.innerText = area;
}