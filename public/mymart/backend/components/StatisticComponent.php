<?php
namespace app\components;

use Yii;
use frontend\models\Statistic;
use yii\base\Component;
use yii\web\Request;

class StatisticComponent extends Component
{
    const ON_SAVE_STAT = "save-stat";

    public static function storeUserInfo(){
        $statistic = new Statistic();
        $request = yii::$app->request;

        $statistic->access_time = date("Y-m-d H:i:s");
        $statistic->user_ip = $request->getUserIP();
        $statistic->user_host = $request->getUserHost();
        $statistic->path_info = $request->getPathInfo();
        $statistic->query_string = $request->getQueryString();
        $statistic->save();
    }
}