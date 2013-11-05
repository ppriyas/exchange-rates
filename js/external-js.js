
<script type="text/javascript">
		 
		 function generateNumber()
		 {
			var generated_number=Math.floor((Math.random()* 10)+1);
			//myform.number_choice.value = generated_number;
			$("#number_choice").text(generated_number);
			console.log("generated_number is: "+generated_number);
		 }
		 
</script>