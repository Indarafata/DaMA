<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model frontend\models\Item */

$this->title = 'Update Item: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Items', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="item-update">

    <h1><?= Html::encode($this->title) ?></h1>
    <h1>Nama : Ahmed Indarafata Akmal M.S.</h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
