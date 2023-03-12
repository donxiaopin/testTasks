<?php

/**
	Задача 2: массивы
	Нужно заполнить массив 5 на 7 случайными уникальными числами от 1 до 1000.
	Вывести получившийся массив и суммы по строкам и по столбцам.
 */

function arrayCounter($width, $height): void
{
	$res = [];

	for ($i = 0; $i < $height; $i++) {
		for ($k = 0; $k < $width; $k++) {
			$num = rand(1, 1000);

			$res[$i][] = $num;
		}
	}

	drawArray($res);
}

function drawArray(array $array): void
{
	$columnCount = [];

	echo '<table>';
	foreach ($array as $row) {
		echo '<tr>';

		foreach ($row as $i => $value) {
			$columnCount[$i] = isset($columnCount[$i]) ?
				$columnCount[$i] += $value :
				$value;

			echo '<td>' . $value . '</td>';
		}

		echo '<td><b>' . array_sum($row) . '</b></td></tr>';
	}

	echo '<tr>';
	foreach ($columnCount as $item) {
		echo '<td><b>' . $item . '</b></td>';
	}

	echo '</tr></table>';
}

arrayCounter(5, 7);