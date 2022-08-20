<?php

use yii\db\Migration;

/**
 * Class m211020_084604_cretae_order_item_table
 */
class m211020_084604_cretae_order_item_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m211020_084604_cretae_order_item_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m211020_084604_cretae_order_item_table cannot be reverted.\n";

        return false;
    }
    */
}
