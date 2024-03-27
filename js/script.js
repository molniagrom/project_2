const elementBurgerBtn = document.querySelector('.element__burger-btn');
const first = document.querySelector('.first');
const firstElement1 = document.querySelector('.first__element-1');


elementBurgerBtn.addEventListener("click", function(e){
        first.classList.toggle('open');
        // if (firstElement1){
        //    firstElement1.style.transform = "translate(100%)";
        // } else{
        //  firstElement1.style.transform = "none";
        //  }
       
});


// let isTransformed = false;

// document.getElementById("elementBurgerBtn").addEventListener("click", function() {
//     if (!isTransformed) {
//         document.getElementById("firstElement1").style.transform = "translateY(100%)";
//     } else {
//         document.getElementById("firstElement1").style.transform = "none";
//     }
//     isTransformed = !isTransformed;
// });




// if (First.length) {
//     First.classList.toggle('open');
// }
// document.querySelector('.element__burger-btn').addEventListener('click', function() {
//     document.querySelector('.first')
// });

// if (First){
//     ElementBurgerBtn.onclick = function() {
//         First.classList.toggle('open');
//       };
//     elementBurgerBtn.addEventListener("click", function(e) {
//         elementBurgerBtn.classList.toggle('open');
//     if (First){
//         First.classList.toggle('open');
//     }
    
// });  
// }



// .............................................................
	

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}







// Когда использую "оболочку", код не работает

        //    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

                
// Когда использую переменные, код почему-то не работает 

// const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
// 	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
// 	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
// 	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');



	// Клик по кнопке. Открыть/Закрыть select

document.querySelector('.dropdoown__button').addEventListener('click', function(){
        document.querySelector('.dropdoown__list').classList.toggle('dropdoown__list--visible');
        
});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун


document.querySelectorAll('.dropdoown__list-item').forEach(function(listItem) {
        listItem.addEventListener('click', function(e){
                e.stopPropagation();
                document.querySelector('.dropdoown__button').innerText = this.innerText;
                document.querySelector('.dropdoown__input-hidden').value = this.dataset.value;
                document.querySelector('.dropdoown__list').classList.remove('dropdoown__list--visible');

        });
});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
                if (e.target !== document.querySelector('.dropdoown__button')) {
                        document.querySelector('.dropdoown__list').classList.remove('dropdoown__list--visible');
                }
	});



//         document.addEventListener('keybown', function (e) {
//     if (e.key === 'Tab' || e.key === 'Escape') {
//         document.querySelector('.dropdoown__list').classList.remove('dropdoown__list--visible');
//     }
//         });


// Нажатие на Tab или Escape. Закрыть дропдаун  
        document.addEventListener('keydown', function(event) {
                if (event.key === 'Tab' || event.key === 'Escape') {
                //     var dropdownList = document.querySelector('.dropdown__list');
                document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
                }
            });
//      });