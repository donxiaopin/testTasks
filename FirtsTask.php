<?php

/**
  	Задача 1: лесенка
	Нужно вывести лесенкой числа от 1 до 100.
	1
	2 3
	4 5 6
	...
 */

function drawLadder(int $start, int $end): void
{
	$counter = $start;

	for	($i = 1; $i <= $end; $i++) {
		for ($j = 1; $j <= $i; $j++) {
			echo $counter . " ";

			if ($counter >= $end)
				break 2;

			$counter++;
		}

		echo "<br>";
	}
}

drawLadder(1, 100);